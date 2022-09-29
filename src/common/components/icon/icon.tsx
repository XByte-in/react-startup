import { IconSize } from "../../pictures";


interface IIconParams {
  iconName: string;
  iconSize: IconSize;
  id?: string;
  className?: string;
  styleObj?: object;
  onClick?: () => {};
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onError?: () => void;
}

const Icon = (props: IIconParams) => {
  return (
    <img
      id={props.id}
      className={`${props.className}`}
      height={props.iconSize}
      src={props.iconName}
      style={props.styleObj}
      onClick={props.onClick}
      onError={props.onError}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
    />
  );
};
export default Icon;
