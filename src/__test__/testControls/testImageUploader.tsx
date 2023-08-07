import ImageUploader from '../../common/controls/imageUploader/imageUploader';

const TestImageUploader = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <ImageUploader
            enableUpload={false}
            imageSrc="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
            expectedResolution={{ width: 500, height: 500 }}
            expectedMaxFileSizeKB="100"
            imagePreviewSize={{ width: 200, height: 500 }}
            onUploadImage={(file: File | null | undefined): void => {
              console.log(file);
            }}
            onClearImage={() => console.log('clear')}
          />
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default TestImageUploader;
