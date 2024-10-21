import React from 'react';
import JsonView, {
  arrayToFormattedTable,
  getFormattedString,
  ICustomFormatterParam,
} from '../../common/controls/jsonView/jsonView';
import jsonData from '../testData/jsonData.json'; // Ensure the path is correct
import Utils from '../../common/utils';
const TestJsonView = () => {
  const customFormatter = {
    app_assets: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params, ['lang', 'data']);
    },
    'app_assets.[*].data': function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    comments: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params, [
        'from_state',
        'to_state',
        'commented_by',
        'commented_at',
        'comment_text',
      ]);
    },
    'comments.[*].commented_at': function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        Utils.jsToDateString(new Date(params.data.$date))
      );
    },
    created_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        Utils.jsToDateString(new Date(params.data))
      );
    },
    modified_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        Utils.jsToDateString(new Date(params.data))
      );
    },
  };

  return <JsonView jsonObject={jsonData} customFormatter={customFormatter} />;
};

export default TestJsonView;
