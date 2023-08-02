import React from 'react';

import { Type } from '../../common/const';
import Label from '../../common/controls/label/label';
import { Typography } from '../../common/theme/typography/typography';

const TestLabel = () => {
  return (
    <div className="row">
      <div className="col">
        <Label
          labelText="yes"
          type={Type.primary}
          typography={Typography.body_medium_regular}
        />
      </div>
      <div className="col">
        <Label
          labelText="yes"
          type={Type.secondary}
          typography={Typography.body_medium_regular}
        />
      </div>
      <div className="col">
        <Label
          labelText="yes"
          type={Type.default}
          typography={Typography.body_medium_regular}
        />
      </div>
      <div className="col">
        <Label
          labelText="yes"
          type={Type.danger}
          typography={Typography.body_medium_regular}
        />
      </div>
    </div>
  );
};

export default TestLabel;
