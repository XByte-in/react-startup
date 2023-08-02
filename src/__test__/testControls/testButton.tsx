import React from 'react';

import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';

const TestButton = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <Button btnText="yes" type={Type.primary} size={Size.small} />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.secondary} size={Size.small} />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.default} size={Size.small} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            btnText="yes"
            type={Type.primary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            btnText="yes"
            type={Type.secondary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            btnText="yes"
            type={Type.default}
            size={Size.small}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export default TestButton;
