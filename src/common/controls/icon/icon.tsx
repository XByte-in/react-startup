import { useState } from 'react';

import { IMouseEventParam } from '../iControl';

interface IIconParams extends IMouseEventParam {
  iconSrc: string;
  iconDimension?: string;
  alt?: string;
  onError?: () => void;
}

const Icon = (props: IIconParams) => {
  const [styleObj] = useState({
    ...props.styleObj,
    height: props.iconDimension,
    width: props.iconDimension,
  });

  return (
    <img
      id={props.id}
      className={props.className}
      style={styleObj}
      src={props.iconSrc}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      onError={props.onError}
      alt={props.alt}
    />
  );
};
export default Icon;
