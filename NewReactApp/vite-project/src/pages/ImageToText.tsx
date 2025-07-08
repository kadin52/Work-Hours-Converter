import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import DownloadFile from "../components/DownloadFile";
import "./ImageToText.css";
const ImageToText: React.FC = () => {
  const [showDownload, setShowDownload] = useState(false);

  const handleUploadSuccess = () => {
    setShowDownload(true);
  };

  return (
    <div className="container">
      <div className="text-center ">
        <h2>Convert Image to Text</h2>
        <p>Upload an image to download the extracted text</p>
      </div>

      <div className="image-upload-container">
        <ImageUpload uploadSuccess={handleUploadSuccess} />
      </div>
      {showDownload && (
        <div>
          <DownloadFile />
        </div>
      )}
    </div>
  );
};

export default ImageToText;
