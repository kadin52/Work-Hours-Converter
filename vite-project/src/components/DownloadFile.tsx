import { useState } from "react";
import FileService from "../services/FileService";
import http from "../http-common";

const DownloadFile = () => {
  const baseURL = http.defaults.baseURL;

  return (
    <>
      <div className="text-center">
        <h3>Download the file</h3>

        <a
          href={`${baseURL}/download-text`}
          className="btn btn-primary"
          download="extracted_text.txt"
        >
          Download Text File
        </a>
      </div>
    </>
  );
};

export default DownloadFile;
