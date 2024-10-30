import JsonDiff from '../../common/controls/jsonDiff/jsonDiff';
import leftJson from '../testData/jsonDiff/left.json';
import rightJson from '../testData/jsonDiff/right.json';

const TestJsonDiff = () => {
  const customArrayKeyComparator = {
    comments: function (data: any) {
      return data['commented_at']['$date'];
    },
  };
  return (
    <JsonDiff
      leftData={{ heading: 'Left Heading', jsonData: leftJson }}
      rightData={{ heading: 'Right Heading', jsonData: rightJson }}
      customArrayKeyComparator={customArrayKeyComparator}
    ></JsonDiff>
  );
};

export default TestJsonDiff;
