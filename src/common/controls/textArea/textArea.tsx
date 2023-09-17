import './textArea.scss';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  rows: number;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="textArea"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      rows={props.rows}
    />
  );
};

export default TextArea;
