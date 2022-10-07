import { useState, useEffect } from "react";
import { JsonValueType } from "../../commonConst";
import CommonUtils from "../../commonUtils";
import "./jsonView.scss";

interface IJsonViewParam {
  jsonObject: { [key: string]: any };
  topElements?: Array<string>;
  bottomElements?: Array<string>;
  ignoreElements?: Array<string>;
}

const JsonView = (props: IJsonViewParam) => {
  const [formattedJsonObject, setFormattedJsonObject] = useState(<></>);

  useEffect(() => {
    const orderedResponse = CommonUtils.reorderJsonObject(
      props.jsonObject,
      props.ignoreElements,
      props.topElements,
      props.bottomElements
    );
    setFormattedJsonObject(getFormattedData(orderedResponse));
  }, [props.jsonObject]);

  function getFormattedData(data: any): JSX.Element {
    const dataType = CommonUtils.jsonValueType(data);
    let result: JSX.Element;
    if (dataType === JsonValueType.object) result = getFormattedObject(data);
    else if (dataType === JsonValueType.array) result = getFormattedArray(data);
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

  function getFormattedArray(arrayData: any) {
    const divContent: any = arrayData.map((arrayItem: any) =>
      getFormattedData(arrayItem)
    );
    return <>{divContent}</>;
  }

  function getFormattedObject(jsonData: { [key: string]: any }): JSX.Element {
    const keys = Object.keys(jsonData);
    if (keys.length === 0) return <></>;
    const tableContent = keys.map((key) =>
      getFormattedTableRow(key, jsonData[key])
    );
    return (
      <table key={Math.random().toString()}>
        <thead>
          <tr>
            <th style={{ width: 175 }}>FIELD</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  function getFormattedTableRow(field: string, value: any) {
    let clsName = "";
    if (
      CommonUtils.jsonValueType(value) === JsonValueType.string ||
      CommonUtils.jsonValueType(value) === JsonValueType.boolean ||
      CommonUtils.jsonValueType(value) === JsonValueType.number
    )
      clsName = "td-string";
    const formattedVal = getFormattedData(value);
    return (
      <tr key={field}>
        <td className="td-field td-string" aria-label={`${field}`}>
          {field}
        </td>
        <td aria-label={`${field} value`}>
          <span className={`value-cell ${clsName}`}>{formattedVal}</span>
        </td>
      </tr>
    );
  }
  return <div className="json-view">{formattedJsonObject}</div>;
};
export default JsonView;
