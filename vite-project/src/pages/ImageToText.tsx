import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import DownloadFile from "./DownloadFile";
import "./SharedImageTo.css";
const ImageToText: React.FC = () => {
  const [showDownload, setShowDownload] = useState(false);

  const handleUploadSuccess = () => {
    setShowDownload(true);
  };

  return (
    <div className="container">
      <div className="text-center ">
        <h1>Convert Image to Text</h1>
        <p>Upload an image to download the extracted text</p>
      </div>

      <div className="image-upload-container">
        <ImageUpload fileType="text" />
      </div>
    </div>
  );
};

export default ImageToText;
