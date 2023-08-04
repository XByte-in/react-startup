import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

const TestButton = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.small}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.small}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.small}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.default}
            size={Size.small}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.default}
            size={Size.small}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.medium}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.medium}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.medium}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.medium}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.default}
            size={Size.medium}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.default}
            size={Size.medium}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.default}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.default}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.default}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.default}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.default}
            size={Size.default}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.default}
            size={Size.default}
            disabled={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.large}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.primary}
            size={Size.large}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.large}
            fontAwesomeIcon={faFileExcel}
          />
          <Button
            textId="yes"
            type={Type.secondary}
            size={Size.large}
            disabled={true}
          />
        </div>
        <div className="col">
          <Button textId="yes" type={Type.default} size={Size.large} />
          <Button
            textId="yes"
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
