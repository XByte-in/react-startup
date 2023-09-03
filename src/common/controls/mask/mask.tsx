import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mask.scss';

const Mask = () => {
  return (
    <div className="mask">
      <FontAwesomeIcon icon={faCircleNotch} className="loader" />
    </div>
  );
};
export default Mask;
