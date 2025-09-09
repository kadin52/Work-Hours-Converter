import ImageUpload from "../components/ImageUpload";
import InfoSection from "../components/About";
import "./SharedImageTo.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ImageToText = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const extractedText = localStorage.getItem("extractedText");
    if (!extractedText) {
      navigate("/toCsv");
    }
  });
  return (
    <div className="container">
      <div className="text-center ">
        <h1>Convert Image to Text</h1>
        <p>Upload an image to download the extracted text</p>
      </div>

      <div className="image-upload-container">
        <ImageUpload fileType="text" />
      </div>
      <InfoSection />
    </div>
  );
};

export default ImageToText;
