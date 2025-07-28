import ImageUpload from "../components/ImageUpload";

import InfoSection from "../components/About";
import "./SharedImageTo.css";
const ImageToCSV = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Convert Image to CSV</h1>
        <p>
          Upload an image to download the csv file from the extracted text
          <br />
          Formatting example can be seen
          <a
            href="https://github.com/kadin52/Work-Hours-Converter"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
      </div>

      <div className="image-upload-container">
        <ImageUpload fileType="csv" />
      </div>

      <InfoSection />
    </div>
  );
};

export default ImageToCSV;
