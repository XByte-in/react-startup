import ImageUploader from '../../common/controls/imageUploader/imageUploader';

const TestImageUploader = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <ImageUploader
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
