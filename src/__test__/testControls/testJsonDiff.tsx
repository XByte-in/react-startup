import JsonDiff from '../../common/controls/jsonDiff/jsonDiff';
import leftJson from '../testData/jsonDiff/left.json';
import rightJson from '../testData/jsonDiff/right.json';

const TestJsonDiff = () => {
  return (
    <JsonDiff
      leftData={{ heading: 'Left Heading', jsonData: leftJson }}
      rightData={{ heading: 'Right Heading', jsonData: rightJson }}
    ></JsonDiff>
  );
};

export default TestJsonDiff;
