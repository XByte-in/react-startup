import { IMouseEventParam } from '../iControl';

import './image.scss';

interface IImageParams extends IMouseEventParam {
  imageSrc: string;
  alt?: string;
  onError?: () => void;
}

const Image = (props: IImageParams) => {
  const isClickable = !!props.onClick;
  return (
    <img
      id={props.id}
      src={props.imageSrc}
      className={`image ${isClickable ? 'clickable' : ''} ${
        props.disabled ? 'disabled' : ''
      } ${props.className}`}
      style={props.styleObj}
      onClick={props.disabled ? undefined : props.onClick}
      onError={props.disabled ? undefined : props.onError}
      onMouseEnter={props.disabled ? undefined : props.onMouseEnter}
      onMouseLeave={props.disabled ? undefined : props.onMouseLeave}
      onMouseDown={props.disabled ? undefined : props.onMouseDown}
      alt={props.alt}
    />
  );
};

export default Image;
