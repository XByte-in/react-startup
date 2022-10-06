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
  const [formattedJsonObject, setFormattedJsonObject] = useState(<div></div>);

  useEffect(() => {
    const orderedResponse = CommonUtils.reorderJsonObject(
      props.jsonObject,
      props.topElements,
      props.bottomElements
    );
    setFormattedJsonObject(getFormattedData(orderedResponse));
  }, [props.jsonObject]);

  function getFormattedString(stringData: any) {
    const val = JSON.stringify(stringData);
    if (val.includes("https://") || val.includes("http://"))
      return (
        <a target="_blank" rel="noreferrer" href={stringData}>
          {stringData}
        </a>
      );
    if (CommonUtils.jsonValueType(stringData) === JsonValueType.boolean)
      stringData = stringData.toString();
    return <span key={Math.random().toString()}>{stringData}&emsp;</span>;
  }

  function getFormattedData(data: any): JSX.Element {
    const dataType = CommonUtils.jsonValueType(data);
    let result: JSX.Element;
    if (dataType === JsonValueType.object) result = getFormattedObject(data);
    else if (dataType === JsonValueType.array) result = getFormattedArray(data);
    else result = getFormattedString(data);
    return result;
  }

  function getFormattedArray(arrayData: any) {
    const divContent: any = arrayData.map((arrayItem: any) =>
      getFormattedData(arrayItem)
    );
    return <span>{divContent}</span>;
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

  function insertCommentText(text: string) {
    return { __html: text };
  }

  function isValidURL(text: string) {
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return text.match(urlRegex);
  }

  function encodeHTML(text: string) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#x27;");
  }

  function addLinkstoWords(words: Array<string>) {
    return words.map((word) => {
      const encodedWord = encodeHTML(word);
      if (isValidURL(encodedWord)) {
        return `<a href="${encodedWord}" target="_blank">${encodedWord}</a>`;
      }
      return encodedWord;
    });
  }

  function getCommentsTable(value: Array<any>) {
    const comments = value.map((comment) => {
      const commentWords = comment.comment_text
        .split("\n")
        .join(" ")
        .split(" ");
      const commentWordsWithLinks = addLinkstoWords(commentWords);
      const commentText = commentWordsWithLinks.join(" ");

      return (
        <tr key={Math.random().toString()}>
          <td>
            <span className="Td-String-Cell">{comment.from_state}</span>
          </td>
          <td>
            <span className="Td-String-Cell">{comment.to_state}</span>
          </td>
          <td>
            <span className="Td-String-Cell">
              <span
                dangerouslySetInnerHTML={insertCommentText(commentText)}
              ></span>
            </span>
          </td>
          <td>
            <span className="Td-String-Cell">{comment.commented_by}</span>
          </td>
          <td>
            <span className="Td-String-Cell">
              {comment.commented_at &&
                comment.commented_at.$date &&
                CommonUtils.jsToDateString(
                  new Date(comment.commented_at.$date)
                )}
            </span>
          </td>
        </tr>
      );
    });

    return (
      <table key={Math.random().toString()}>
        <thead>
          <tr>
            <th>FROM STATE</th>
            <th>TO STATE</th>
            <th>COMMENT</th>
            <th>COMMENTED BY</th>
            <th>COMMENTED AT</th>
          </tr>
        </thead>
        <tbody>{comments}</tbody>
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
      clsName = `${clsName} Td-String-Cell`;
    let formattedVal;
    if (field === "comments" || field === "developer_comments") {
      if (value.length > 0) formattedVal = getCommentsTable(value);
      else formattedVal = "";
    } else if (field === "created_at" || field === "modified_at") {
      formattedVal = CommonUtils.jsToDateString(new Date(value));
    } else if (field === "launch_date_time")
      if (!value) formattedVal = "";
      else formattedVal = CommonUtils.jsToDateString(new Date(value));
    else formattedVal = getFormattedData(value);
    return (
      <tr key={field}>
        <td className="Td-Field Td-String-Cell" aria-label={`${field}`}>
          {field}
        </td>
        <td aria-label={`${field} value`}>
          <span className={`value-cell ${clsName}`}>{formattedVal}</span>
        </td>
      </tr>
    );
  }
  return <div>{formattedJsonObject}</div>;
};
export default JsonView;
