import { IconSize } from "../../pictures";


interface IIconParams {
  iconName: string;
  iconSize: IconSize;
  id?: string;
  className?: string;
  styleObj?: object;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onError?: () => void;
}

const Icon = (props: IIconParams) => {
  return (
    <img
      id={props.id}
      src={props.iconName}
      height={props.iconSize}
      className={`icon ${props.className}`}
      style={props.styleObj}
      onClick={props.onClick}
      onError={props.onError}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      alt={`${props.id}_${props.iconSize}_${props.iconName}`}
    />
  );
};
export default Icon;
