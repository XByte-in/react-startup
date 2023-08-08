import { useEffect, useState } from 'react';
import './progressBar.scss';

interface IProgressBarParams {
  value: number;
}

const ProgressBar = (props: IProgressBarParams) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props]);

  return <progress className="progressBar" value={value} max="100" />;
};

export default ProgressBar;
