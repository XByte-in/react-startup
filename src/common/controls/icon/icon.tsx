import { useState } from 'react';

import { IBaseControlParam, IMouseEventParam } from '../iControl';

interface IIconParams extends IBaseControlParam, IMouseEventParam {
  iconSrc: string;
  iconDimension: string;
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
      onError={props.onError}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      alt={props.alt}
    />
  );
};
export default Icon;
