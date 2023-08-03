import CheckBox from '../../common/controls/checkbox/checkBox';
const TestCheckBox = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <CheckBox
            textId="yes"
            checked={false}
            onChange={(checked: boolean) => console.log(checked)}
          />
        </div>
        <div className="col">
          <CheckBox
            textId="yes"
            checked={false}
            disabled={true}
            onChange={(checked: boolean) => console.log(checked)}
          />
        </div>
      </div>
    </>
  );
};

export default TestCheckBox;
