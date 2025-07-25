import http from "../http-common";
import "./DownloadFile.css";
const DownloadFile = ({ fileType }: { fileType: string }) => {
  const baseURL = http.defaults.baseURL;

  return (
    <>
      <div className="text-center">
        <h3>Your file is ready!</h3>

        <a
          href={`${baseURL}/download-${fileType}`}
          className="btn btn-primary"
          download={`extracted_file.${fileType}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
            />
          </svg>
          Download {fileType.toUpperCase()}
        </a>
        <p>
          <a href={`/to${fileType}`}> Click here </a>
          to convert more
        </p>
      </div>
    </>
  );
};

export default DownloadFile;
