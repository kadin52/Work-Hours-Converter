import { useState, useEffect } from "react";
import FileService from "../services/FileService";
import ImageFile from "../types/ImageFile";
import "./ImageUpload.css";

interface ImageUploadProps {
  uploadSuccess?: () => void;
}

const ImageUpload = (props: ImageUploadProps) => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [imageInfo, setImageInfo] = useState<ImageFile[]>([]);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    if (selectedFiles) {
      setCurrentImage(selectedFiles[0]);
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
    } else {
      setCurrentImage(undefined);
    }
  };

  const upload = async () => {
    if (!currentImage) return;

    try {
      const response = await FileService.upload(currentImage);

      // const files = await FileService.getFiles();
      // setImageInfo(files.data);

      if (props.uploadSuccess) {
        console.log("Upload successful, calling uploadSuccess callback");
        props.uploadSuccess();
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div>
        <div className="select-button-container">
          <label className="btn btn-primary btn-lg">
            <input
              type="file"
              accept="image/*"
              onChange={selectImage}
              style={{ display: "none" }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            Select an Image
          </label>
        </div>

        <div className="preview-container">
          {previewImage && (
            <img className="preview" src={previewImage} alt="preview" />
          )}
        </div>

        <div className="download-container">
          {currentImage != null && (
            <>
              <p>{currentImage.name}</p>
              <button
                className="btn btn-success"
                disabled={!currentImage}
                onClick={upload}
              >
                Upload
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ImageUpload;
