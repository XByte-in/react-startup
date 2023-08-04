import { useState } from 'react';

import { IMouseEventParam } from '../iControl';

import './icon.scss';

interface IIconParams extends IMouseEventParam {
  iconSrc: string;
  iconDimension?: string;
  alt?: string;
  onError?: () => void;
}

const Icon = (props: IIconParams) => {
  const isClickable = props.onClick ? true : false;
  const [styleObj] = useState({
    ...props.styleObj,
    height: props.iconDimension,
    width: props.iconDimension,
  });

  return (
    <img
      id={props.id}
      className={`icon ${isClickable ? 'clickable' : ''} ${
        props.disabled ? 'disabled' : ''
      } ${props.className}`}
      style={styleObj}
      src={props.iconSrc}
      onClick={props.disabled ? undefined : props.onClick}
      onMouseEnter={props.disabled ? undefined : props.onMouseEnter}
      onMouseLeave={props.disabled ? undefined : props.onMouseLeave}
      onMouseDown={props.disabled ? undefined : props.onMouseDown}
      onError={props.onError}
      alt={props.alt}
    />
  );
};
export default Icon;
