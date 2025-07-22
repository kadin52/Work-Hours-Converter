import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import DownloadFile from "./DownloadFile";
import "./SharedImageTo.css";
const ImageToCSV: React.FC = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Convert Image to CSV</h1>
        <p>Upload an image to download the csv file from the extracted text</p>
      </div>

      <div className="image-upload-container">
        <ImageUpload fileType="csv" />
      </div>
    </div>
  );
};

export default ImageToCSV;
