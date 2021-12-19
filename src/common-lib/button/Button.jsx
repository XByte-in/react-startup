import { Text } from "../text";
import "./Text.scss";

const Button = ({ btnText }) => {
  return (
    <button>
      <Text text={btnText} />
    </button>
  );
};
