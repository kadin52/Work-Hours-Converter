import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import DownloadFile from "../components/DownloadFile";
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
        {/* <ImageUpload uploadSuccess={handleUploadSuccess} /> */}
        <ImageUpload fileType="text" />
      </div>
      {/* {showDownload && (
        <div>
          <DownloadFile />
        </div>
      )} */}
    </div>
  );
};

export default ImageToText;
