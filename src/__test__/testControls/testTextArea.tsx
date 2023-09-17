import TextArea from '../../common/controls/textArea/textArea';

const TestTextArea = () => {
  return (
    <TextArea
      value="10 rows"
      onChange={(str: string) => console.log(str)}
      rows={10}
    />
  );
};

export default TestTextArea;
