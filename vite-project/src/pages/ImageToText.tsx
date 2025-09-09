import ImageUpload from "../components/ImageUpload";
import InfoSection from "../components/About";
import "./SharedImageTo.css";

const ImageToText = () => {
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
