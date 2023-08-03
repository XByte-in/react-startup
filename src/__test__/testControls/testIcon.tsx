import Icon from '../../common/controls/icon/icon';

const TestIcon = () => {
  return (
    <div className="row">
      <div className="col">
        <Icon
          iconDimension="100px"
          iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        />
      </div>
      <div className="col">
        <Icon
          disabled={true}
          iconDimension="100px"
          iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        />
      </div>
    </div>
  );
};

export default TestIcon;
