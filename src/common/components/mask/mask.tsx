import { useState } from "react";
import { Icons_64px } from "../../pictures/pictures";
import "./mask.scss";
interface IMaskParams {
  iconSize?: string;
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };
}

const Mask = (props: IMaskParams) => {
  const [styleObject] = useState({
    height: props.iconSize,
    width: props.iconSize,
  });

  return (
    <div className="mask">
      <img
        id={props.id}
        src={Icons_64px.cicular_loader}
        className="loading"
        style={styleObject}
        alt=""
      ></img>
    </div>
  );
};
export default Mask;
