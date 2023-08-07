import axios from 'axios';
import { ChangeEvent, DragEvent, useEffect, useState } from 'react';

import { Size, Type } from '../../const';
import { Typography } from '../../theme';
import Utils from '../../utils';
import Button from '../button/button';
import { IBaseControlParam } from '../iControl';
import Image from '../image/image';
import Label from '../label/label';

import './imageUploader.scss';

interface IImageResolution {
  width: number;
  height: number;
}

interface IImageUploaderParams extends IBaseControlParam {
  imageSrc?: string;
  expectedResolution: IImageResolution;
  expectedMaxFileSizeKB: string;
  maxImagePreviewSize: number;
  onUploadImage: (file: File | null | undefined) => void;
}

const ImageUploader = (props: IImageUploaderParams) => {
  const [imageSrc, setImageSrc] = useState<string | null>(
    props.imageSrc ? props.imageSrc : null
  );
  const [imageResolution, setImageResolution] =
    useState<IImageResolution | null>(null);
  const [imageFileSize, setImageFileSize] = useState<string | null>(null);

  const [imagePreviewSize, setImagePreviewSize] = useState({
    height: props.expectedResolution.height,
    width: props.expectedResolution.width,
  });
  const [selectedImage, setSelectedImage] = useState<File | null | undefined>(
    null
  );

  useEffect(() => {
    if (props.expectedResolution) {
      const expectedRatio =
        props.expectedResolution.width / props.expectedResolution.height;
      if (props.expectedResolution.width > props.maxImagePreviewSize) {
        setImagePreviewSize({
          width: props.maxImagePreviewSize,
          height: props.maxImagePreviewSize / expectedRatio,
        });
      }
      if (props.expectedResolution.height > props.maxImagePreviewSize) {
        setImagePreviewSize({
          width: props.maxImagePreviewSize * expectedRatio,
          height: props.maxImagePreviewSize,
        });
      }
    }
  }, [props.expectedResolution, props.maxImagePreviewSize]);
  useEffect(() => {
    if (props.imageSrc)
      axios.head(props.imageSrc).then(response => {
        if (response.status === 200) {
          setImageFileSize(
            Utils.convertBytes(response.headers['content-length'])
          );
        }
      });
  }, [props.imageSrc]);

  const onImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleImage(file);
  };

  const onImageDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleImage(file);
  };

  const handleImage = (file: File | undefined) => {
    setSelectedImage(file);
    // Preview the image
    if (file) {
      setImageFileSize(Utils.convertBytes(file.size));
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleImageUpload = () => {
    if (props.onUploadImage) props.onUploadImage(selectedImage);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onImageLoad = (target: any) => {
    setImageResolution({
      width: target.target.naturalWidth,
      height: target.target.naturalHeight,
    });
  };

  return (
    <div className="image-upload">
      {(imagePreviewSize || props.expectedMaxFileSizeKB) && (
        <div className="image-detail">
          {props.expectedResolution && (
            <Label
              textId="expectedResolution"
              text={`${props.expectedResolution.width}x${props.expectedResolution.height}`}
              type={Type.default}
              typography={Typography.body_small_regular}
            />
          )}
          {props.expectedMaxFileSizeKB && (
            <Label
              textId="maxFileSize"
              text={props.expectedMaxFileSizeKB}
              type={Type.default}
              typography={Typography.body_small_regular}
            />
          )}
        </div>
      )}

      <div
        className="drop-zone"
        onDrop={onImageDrop}
        onDragOver={handleImageDragOver}
        onClick={() => {
          document.getElementById(`file-input-${props.id}`)?.click();
        }}
        style={{
          backgroundImage: `url(${imageSrc})`,
          height: imagePreviewSize.height,
          width: imagePreviewSize.width,
        }}
      >
        {!imageSrc && (
          <Label
            textId="selectImage"
            className="image-label"
            type={Type.default}
            typography={Typography.body_small_regular}
          />
        )}
      </div>
      {imageSrc && (
        <Image
          className="preview"
          imageSrc={imageSrc}
          alt="Preview"
          onLoad={onImageLoad}
        />
      )}
      <input
        className="image-input"
        type="file"
        accept="image/*"
        onChange={onImageSelect}
        style={{ display: 'none' }}
        id={`file-input-${props.id}`}
      />
      {imageResolution && (
        <div className="image-detail">
          <Label
            textId="actualResolution"
            text={`${imageResolution.width} x ${imageResolution.height}`}
            type={Type.default}
            typography={Typography.body_small_regular}
          />
          <Label
            textId="actualFileSize"
            text={imageFileSize}
            type={Type.default}
            typography={Typography.body_small_regular}
          />
          {selectedImage && (
            <div className="action-btns">
              <Button
                textId="upload"
                type={Type.secondary}
                size={Size.small}
                onClick={() => {
                  handleImageUpload();
                }}
              ></Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
