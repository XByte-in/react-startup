import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';

const TestButton = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <Button btnText="yes" type={Type.primary} size={Size.small} />
          <Button
            btnText="yes"
            type={Type.primary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.secondary} size={Size.small} />
          <Button
            btnText="yes"
            type={Type.secondary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.default} size={Size.small} />
          <Button
            btnText="yes"
            type={Type.default}
            size={Size.small}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button btnText="yes" type={Type.primary} size={Size.medium} />
          <Button
            btnText="yes"
            type={Type.primary}
            size={Size.medium}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.secondary} size={Size.medium} />
          <Button
            btnText="yes"
            type={Type.secondary}
            size={Size.medium}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.default} size={Size.medium} />
          <Button
            btnText="yes"
            type={Type.default}
            size={Size.medium}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button btnText="yes" type={Type.primary} size={Size.default} />
          <Button
            btnText="yes"
            type={Type.primary}
            size={Size.default}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.secondary} size={Size.default} />
          <Button
            btnText="yes"
            type={Type.secondary}
            size={Size.default}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.default} size={Size.default} />
          <Button
            btnText="yes"
            type={Type.default}
            size={Size.default}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button btnText="yes" type={Type.primary} size={Size.large} />
          <Button
            btnText="yes"
            type={Type.primary}
            size={Size.large}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.secondary} size={Size.large} />
          <Button
            btnText="yes"
            type={Type.secondary}
            size={Size.large}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button btnText="yes" type={Type.default} size={Size.large} />
          <Button
            btnText="yes"
            type={Type.default}
            size={Size.large}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export default TestButton;
