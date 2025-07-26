import "./About.css";

const InfoSection = () => {
  return (
    <div className="info-section-container">
      <div className="paragraph-column">
        <h3>Why I made this</h3>
        <p>
          At my workplace, the timesheets are still handwritten. Calculating the
          hours became tedious, so this tool makes this process easier.
        </p>
      </div>

      <div className="paragraph-column">
        <h3>(Image To Text)</h3>
        <p>
          Select and upload an image. Using Google's Cloud Vision API, the text
          is extracted. Then click the button the download button.
        </p>
      </div>

      <div className="paragraph-column">
        <h3>(Image To CSV)</h3>
        <p>
          Select and upload an image. Using Google's Cloud Vision API, the text
          is extracted. In a CSV file, the hours are grouped by name, allowing
          easy calculation in a spreadsheet application. Then click the download
          button.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
