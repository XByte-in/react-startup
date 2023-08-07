import { IMouseEventParam } from '../iControl';

import './image.scss';

interface IImageParams extends IMouseEventParam {
  imageSrc: string;
  alt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onLoad?: (target: any) => void;
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
      onMouseEnter={props.disabled ? undefined : props.onMouseEnter}
      onMouseLeave={props.disabled ? undefined : props.onMouseLeave}
      onMouseDown={props.disabled ? undefined : props.onMouseDown}
      onLoad={props.disabled ? undefined : props.onLoad}
      onError={props.disabled ? undefined : props.onError}
      alt={props.alt}
    />
  );
};

export default Image;
