import "./index.scss";
import Text from "../Text";
const Button = ({ btnText }) => {
  return (
    <button>
      <Text text={btnText} />
    </button>
  );
};
export default Button;
