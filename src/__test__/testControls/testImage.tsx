import Image from '../../common/controls/image/image';
const TestImage = () => {
  const styles = { height: '100px', width: '100px' };
  return (
    <>
      <div className="row">
        <div className="col">
          <Image
            styleObj={styles}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
        </div>
        <div className="col">
          <Image
            styleObj={styles}
            disabled={true}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Image
            styleObj={styles}
            onClick={() => alert('clicked')}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
        </div>
        <div className="col">
          <Image
            styleObj={styles}
            onClick={() => alert('clicked')}
            disabled={true}
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          />
        </div>
      </div>
    </>
  );
};

export default TestImage;
