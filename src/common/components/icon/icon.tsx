import { Size } from "../../commonConstants";

interface IIconParams {
  id?: string;
  image_name: string;
  size: Size;
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
      src={props.image_name}
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
