import "./jsonDiff.scss";
import CommonUtils from "../../commonUtils";
import { JsonValueType } from "../../commonConst";
import { useState, useEffect } from "react";

interface IJsonData {
  heading: string;
  jsonData: any;
}
interface IJsonDiffParams {
  leftData: IJsonData;
  rightData: IJsonData;
}

function JsonDiff(props: IJsonDiffParams) {
  const [diffBody, setDiffBody] = useState([<tr key={Math.random()}></tr>]);
  useEffect(() => {
    const tableRows: Array<any> = [];
    compareObject(
      tableRows,
      "",
      props.leftData.jsonData,
      props.rightData.jsonData,
      0
    );
    const rows = tableRows.map((row, index) => {
      const spacing = [];
      for (let i = 0; i < row.level; i++) {
        spacing.push(<>&emsp;</>);
      }
      return (
        <tr key={Math.random()}>
          <td key={Math.random()}>{index + 1}</td>
          {row.leftCol ? (
            <td
              key={Math.random()}
              aria-label={row.leftCol.className}
              className={row.leftCol.className}
            >
              {spacing}
              {row.key && <span className="key">{row.key}:</span>}&nbsp;
              {getCellData(row, "leftCol")}
            </td>
          ) : (
            <td key={Math.random()}></td>
          )}
          {row.rightCol ? (
            <td
              key={Math.random()}
              aria-label={row.rightCol.className}
              className={row.rightCol.className}
            >
              {spacing}
              {row.key && <span className="key">{row.key}:</span>}&nbsp;
              {getCellData(row, "rightCol")}
            </td>
          ) : (
            <td key={Math.random()}></td>
          )}
        </tr>
      );
    });
    setDiffBody(rows);
  }, [props]);

  const isDate = (key: string) => {
    const dateFields = new Set([
      "created_at",
      "modified_at",
      "launch_date_time",
      "commented_at",
    ]);
    return dateFields.has(key);
  };

  function parseObject(
    tableRows: Array<any>,
    parentKey: string,
    obj: any,
    col: string,
    className: string,
    level: number
  ) {
    const openRow: { [key: string]: any } = { level: level, key: parentKey };
    openRow[col] = { className: className, data: "{" };
    tableRows.push(openRow);
    const childLevel = level + 1;
    Object.keys(obj).forEach((key) => {
      const item = obj[key];
      const itemType = CommonUtils.jsonValueType(item);
      if (itemType === JsonValueType.array) {
        parseArray(tableRows, parentKey, item, col, className, childLevel);
      } else if (itemType === JsonValueType.object) {
        parseObject(tableRows, key, item, col, className, childLevel);
      } else {
        const td: { [key: string]: any } = { level: childLevel, key: key };
        td[col] = { className: className, data: obj[key] };
        tableRows.push(td);
      }
    });
    const closeRow: { [key: string]: any } = { level: level };
    closeRow[col] = { className: className, data: "}" };
    tableRows.push(closeRow);
  }
  function compareObject(
    tableRows: Array<any>,
    parentKey: string,
    leftObj: any,
    rightObj: any,
    level: number
  ) {
    if (
      (leftObj === null || leftObj === undefined) &&
      (rightObj === null || rightObj === undefined)
    )
      return;
    else if (leftObj === null || leftObj === undefined)
      parseObject(tableRows, parentKey, rightObj, "rightCol", "added", level);
    else if (rightObj === null || rightObj === undefined)
      parseObject(tableRows, parentKey, leftObj, "leftCol", "removed", level);
    else {
      const openRow = {
        level: level,
        key: parentKey,
        leftCol: { data: "{" },
        rightCol: { data: "{" },
      };
      tableRows.push(openRow);

      const leftDataKeys = Object.keys(leftObj);
      const rightDataKeys = Object.keys(rightObj);
      const allDataKeys = leftDataKeys
        .concat(rightDataKeys)
        .filter(CommonUtils.onlyUnique);
      const childLevel = level + 1;
      allDataKeys.forEach((key) => {
        if (!leftObj.hasOwnProperty(key)) {
          const rightVal = rightObj[key];
          const rightValType = CommonUtils.jsonValueType(rightVal);
          if (rightValType === JsonValueType.array) {
            parseArray(
              tableRows,
              key,
              rightVal,
              "rightCol",
              "added",
              childLevel
            );
          } else if (rightValType === JsonValueType.object) {
            parseObject(
              tableRows,
              key,
              rightVal,
              "rightCol",
              "added",
              childLevel
            );
          } else
            tableRows.push({
              level: childLevel,
              key: key,
              rightCol: {
                className: "added",
                data: rightVal,
              },
            });
        } else if (!rightObj.hasOwnProperty(key)) {
          const leftVal = leftObj[key];
          const leftValType = CommonUtils.jsonValueType(leftVal);
          if (leftValType === JsonValueType.array) {
            parseArray(
              tableRows,
              key,
              leftVal,
              "leftCol",
              "removed",
              childLevel
            );
          } else if (leftValType === JsonValueType.object) {
            parseObject(
              tableRows,
              key,
              leftVal,
              "leftCol",
              "removed",
              childLevel
            );
          } else
            tableRows.push({
              level: childLevel,
              key: key,
              leftCol: {
                className: "removed",
                data: leftVal,
              },
            });
        } else {
          const leftVal = leftObj[key];
          const rightVal = rightObj[key];
          const leftValType = CommonUtils.jsonValueType(leftVal);
          const rightValType = CommonUtils.jsonValueType(rightVal);
          let valType;
          if (leftValType === rightValType) {
            valType = leftValType;
          } else {
            if (
              leftValType === JsonValueType.array ||
              rightValType === JsonValueType.array
            )
              valType = JsonValueType.array;
            else if (
              leftValType === JsonValueType.object ||
              rightValType === JsonValueType.object
            )
              valType = JsonValueType.object;
            else valType = JsonValueType.string;
          }
          if (valType === JsonValueType.array) {
            compareArray(tableRows, key, leftVal, rightVal, childLevel);
          } else if (valType === JsonValueType.object) {
            compareObject(tableRows, key, leftVal, rightVal, childLevel);
          } else {
            if (leftVal === rightVal) {
              const className = "same";
              tableRows.push({
                level: childLevel,
                key: key,
                leftCol: {
                  className: className,
                  data: leftVal,
                },
                rightCol: {
                  className: className,
                  data: rightVal,
                },
              });
            } else {
              const className = "modified";
              tableRows.push({
                level: childLevel,
                key: key,
                leftCol: {
                  className: className,
                  data: leftVal,
                },
                rightCol: {
                  className: className,
                  data: rightVal,
                },
              });
            }
          }
        }
      });
      const closeRow = {
        level: level,
        leftCol: { data: "}" },
        rightCol: { data: "}" },
      };
      tableRows.push(closeRow);
    }
  }
  function parseArray(
    tableRows: Array<any>,
    parentKey: string,
    arr: Array<any>,
    col: string,
    className: string,
    level: number
  ) {
    const openRow: { [key: string]: any } = { level: level, key: parentKey };
    openRow[col] = { className: className, data: "[" };
    tableRows.push(openRow);
    const childLevel = level + 1;
    arr.forEach((item) => {
      const itemType = CommonUtils.jsonValueType(item);
      if (itemType === JsonValueType.array) {
        parseArray(tableRows, "", item, col, className, childLevel);
      } else if (itemType === JsonValueType.object) {
        parseObject(tableRows, "", item, col, className, childLevel);
      } else {
        const td: { [key: string]: any } = { level: childLevel };
        td[col] = { className: className, data: item };
        tableRows.push(td);
      }
    });
    const closeRow: { [key: string]: any } = { level: level };
    closeRow[col] = { className: className, data: "]" };
    tableRows.push(closeRow);
  }
  function compareArray(
    tableRows: Array<any>,
    parentKey: string,
    leftArr: Array<any>,
    rightArr: Array<any>,
    level: number
  ) {
    if (
      (leftArr === null || leftArr === undefined) &&
      (rightArr === null || rightArr === undefined)
    )
      return;
    else if (leftArr === null || leftArr === undefined)
      parseArray(tableRows, parentKey, rightArr, "rightCol", "added", level);
    else if (rightArr === null || rightArr === undefined)
      parseArray(tableRows, parentKey, leftArr, "leftCol", "removed", level);
    else {
      const openRow = {
        level: level,
        key: parentKey,
        leftCol: { data: "[" },
        rightCol: { data: "[" },
      };
      tableRows.push(openRow);

      leftArr.sort();
      rightArr.sort();
      const leftArrCopy = leftArr.slice();
      const rightArrCopy = rightArr.slice();
      const childLevel = level + 1;
      while (leftArrCopy.length > 0) {
        const leftItem = leftArrCopy[0];
        const leftItemType = CommonUtils.jsonValueType(leftItem);
        if (leftItemType === JsonValueType.array) {
          parseArray(tableRows, "", leftItem, "leftCol", "removed", childLevel);
          leftArrCopy.splice(0, 1);
        } else if (leftItemType === JsonValueType.object) {
          parseObject(
            tableRows,
            "",
            leftItem,
            "leftCol",
            "removed",
            childLevel
          );
          leftArrCopy.splice(0, 1);
        } else {
          const rightItemIndex = rightArrCopy.indexOf(leftItem);
          if (rightItemIndex !== -1) {
            const className = "same";
            tableRows.push({
              level: childLevel,
              leftCol: {
                className: className,
                data: leftItem,
              },
              rightCol: {
                className: className,
                data: leftItem,
              },
            });
            leftArrCopy.splice(0, 1);
            rightArrCopy.splice(rightItemIndex, 1);
          } else {
            const className = "removed";
            tableRows.push({
              level: childLevel,
              leftCol: {
                className: className,
                data: leftItem,
              },
            });
            leftArrCopy.splice(0, 1);
          }
        }
      }
      while (rightArrCopy.length > 0) {
        const rigthItem = rightArrCopy[0];
        const rightItemType = CommonUtils.jsonValueType(rigthItem);
        const className = "added";
        if (rightItemType === JsonValueType.array) {
          parseArray(
            tableRows,
            "",
            rigthItem,
            "rightCol",
            className,
            childLevel
          );
          rightArrCopy.splice(0, 1);
        } else if (rightItemType === JsonValueType.object) {
          parseObject(
            tableRows,
            "",
            rigthItem,
            "rightCol",
            className,
            childLevel
          );
          rightArrCopy.splice(0, 1);
        } else {
          tableRows.push({
            level: childLevel,
            rightCol: {
              className: className,
              data: rigthItem,
            },
          });
          rightArrCopy.splice(0, 1);
        }
      }
      const closeRow = {
        level: level,
        leftCol: { data: "]" },
        rightCol: { data: "]" },
      };
      tableRows.push(closeRow);
    }
  }

  function getCellData(row: any, side: string) {
    const data = row[side]?.data;
    if (CommonUtils.jsonValueType(data) === JsonValueType.boolean)
      return data ? "true" : "false";
    if (isDate(row.key) && data)
      return CommonUtils.jsToDateString(new Date(data), true);
    return <span>{data}</span>;
  }

  return (
    <div className="json-diff">
      <table>
        <thead>
          <tr key={Math.random()}>
            <th></th>
            <th>{props.leftData.heading}</th>
            <th>{props.rightData.heading}</th>
          </tr>
        </thead>
        <tbody>{diffBody}</tbody>
      </table>
    </div>
  );
}

export default JsonDiff;
