import { useState, useEffect } from "react";
import { JsonValueType } from "../../commonConst";
import CommonUtils from "../../commonUtils";
import "./jsonView.scss";

interface IJsonViewParam {
  jsonObject: { [key: string]: any };
  topElements?: Array<string>;
  bottomElements?: Array<string>;
  ignoreElements?: Array<string>;
  customFormatter?: any;
}

export const createFormattedTable = (
  columns: Array<string>,
  jsonData: Array<any>
) => {
  const tableColumns = columns.map((col) => <th key={Math.random()}>{col}</th>);
  const tableData = jsonData.map((rowData: { [key: string]: string }) => {    
    const rowsData = columns.map((col) => {
      return (
        <td key={Math.random()}>
          <span className="td-string">{rowData[col]}</span>
        </td>
      );
    });
    return <tr key={Math.random()}>{rowsData}</tr>;
  });
  return (
    <table key={Math.random()}>
      <thead>
        <tr key={Math.random()}>{tableColumns}</tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

const JsonView = (props: IJsonViewParam) => {
  const [formattedJsonObject, setFormattedJsonObject] = useState(<></>);

  useEffect(() => {
    const orderedResponse = CommonUtils.reorderJsonObject(
      props.jsonObject,
      props.ignoreElements,
      props.topElements,
      props.bottomElements
    );
    setFormattedJsonObject(getFormattedData("", orderedResponse));
  }, [props.jsonObject]);

  function getFormattedData(parentKey: string, data: any) {
    if (Object.keys(props.customFormatter).includes(parentKey))
      return props.customFormatter[parentKey](data);
    const dataType = CommonUtils.jsonValueType(data);
    let result;
    if (dataType === JsonValueType.object)
      result = getFormattedObject(parentKey, data);
    else if (dataType === JsonValueType.array)
      result = getFormattedArray(parentKey, data);
    else result = getFormattedString(data);
    return result;
  }

  function getFormattedString(stringData: any) {
    const jsonValueType = CommonUtils.jsonValueType(stringData);
    if (
      jsonValueType === JsonValueType.null ||
      jsonValueType === JsonValueType.undefined
    )
      return <></>;
    else if (
      jsonValueType === JsonValueType.boolean ||
      jsonValueType === JsonValueType.number
    )
      stringData = stringData.toString();
    else stringData = CommonUtils.convertUrlInString(stringData);
    return (
      <span
        key={Math.random().toString()}
        className="td-string"
        dangerouslySetInnerHTML={{ __html: stringData }}
      ></span>
    );
  }

  function getFormattedArray(parentKey: string, arrayData: any) {
    const divContent: any = arrayData.map((arrayItem: any) =>
      getFormattedData(parentKey, arrayItem)
    );
    return <>{divContent}</>;
  }

  function getFormattedObject(
    parentKey: string,
    jsonData: { [key: string]: any }
  ) {
    const keys = Object.keys(jsonData);
    if (keys.length === 0) return <></>;

    const tableContent = keys.map((key) =>
      getFormattedTableRow(parentKey, key, jsonData[key])
    );
    return (
      <table key={`${parentKey}.${Math.random()}`}>
        <thead>
          <tr key={Math.random()}>
            <th style={{ width: 175 }}>FIELD</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  function getFormattedTableRow(parentKey: string, field: string, value: any) {
    let clsName = "";
    if (
      CommonUtils.jsonValueType(value) === JsonValueType.string ||
      CommonUtils.jsonValueType(value) === JsonValueType.boolean ||
      CommonUtils.jsonValueType(value) === JsonValueType.number
    )
      clsName = "td-string";
    let fieldKey = field;
    if (parentKey !== "") fieldKey = `${parentKey}.${field}`;
    const formattedVal = getFormattedData(fieldKey, value);
    return (
      <tr key={Math.random()}>
        <td className="td-field td-string">{field}</td>
        <td>
          <span className={`value-cell ${clsName}`}>{formattedVal}</span>
        </td>
      </tr>
    );
  }
  return <div className="json-view">{formattedJsonObject}</div>;
};

export default JsonView;
