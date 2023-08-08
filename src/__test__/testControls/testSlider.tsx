import Slider from '../../common/controls/slider/slider';

const TestSlider = () => {
  return (
    <div className="row">
      <div className="col">
        <Slider
          min={0}
          max={100}
          value={50}
          onChange={(param: number) => {
            console.log(param);
          }}
        />
      </div>
      <div className="col">
        <Slider
          min={0}
          disabled={true}
          max={100}
          value={50}
          onChange={(param: number) => {
            console.log(param);
          }}
        />
      </div>
    </div>
  );
};

export default TestSlider;
