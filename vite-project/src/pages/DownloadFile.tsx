import { useState } from "react";
import FileService from "../services/FileService";
import http from "../http-common";
import "./DownloadFile.css";
const DownloadFile = ({ fileType }: { fileType: string }) => {
  const baseURL = http.defaults.baseURL;

  return (
    <>
      <div className="text-center">
        <h3>Your file is ready!</h3>
        <p>Click to download extracted {fileType.toUpperCase()} file</p>
        <a
          href={`${baseURL}/download-${fileType}`}
          className="btn btn-primary"
          download={`extracted_file.${fileType}`}
        >
          Download
        </a>
        <p>
          Or
          <a href={`/to${fileType}`}> click here </a>
          to convert more
        </p>
      </div>
    </>
  );
};

export default DownloadFile;
