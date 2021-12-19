import { Text } from "../text";
import "./index.scss";

const Button = ({ btnText }) => {
  return (
    <button>
      <Text text={btnText} />
    </button>
  );
};
export default Button;
