import { Type } from '../../common/const';
import Label from '../../common/controls/label/label';
import { Typography } from '../../common/theme/typography/typography';

const TestLabel = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <Label
            textId="yes"
            type={Type.primary}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            type={Type.secondary}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            type={Type.default}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            type={Type.danger}
            typography={Typography.body_small_regular}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Label
            textId="yes"
            disabled={true}
            type={Type.primary}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            disabled={true}
            type={Type.secondary}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            disabled={true}
            type={Type.default}
            typography={Typography.body_small_regular}
          />
        </div>
        <div className="col">
          <Label
            textId="yes"
            disabled={true}
            type={Type.danger}
            typography={Typography.body_small_regular}
          />
        </div>
      </div>
    </>
  );
};

export default TestLabel;
