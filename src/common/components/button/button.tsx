import Icon from "../icon/icon";
import FormattedText from "../formattedText/formattedText";
import { Type, Size } from "../../commonConst";
import "./button.scss";
import { Icons_64px } from "../../pictures/pictures";

interface IButtonParams {
  btnText: string;
  type: Type;
  size: Size;

  id?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  styleObj?: { [key: string]: {} };
  onClick: () => void;

  leftIconName?: string;
  rightIconName?: string;
}

const Button = (props: IButtonParams) => {
  const loader_image = Icons_64px.cicular_loader;
  return (
    <button
      id={props.id}
      style={props.styleObj}
      className={`button ${props.type} ${props.size} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <>
        {props.isLoading && (
          <Icon className="loader-icon" iconName={loader_image} />
        )}
        {/* {!isLoading && btnImageClass && (
          <Icon className="btnIcon" imageClass={`${size}-${btnImageClass}`} alt=""/>
        )} */}
        <span>
          <FormattedText text={props.btnText} />
        </span>
      </>
    </button>
  );
};

export default Button;
