export interface IBaseControlParam {
  id?: string;
  className?: string;
  styleObj?: {
    [key: string]: string;
  };
}

export interface IMouseEventParam extends IBaseControlParam {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
}