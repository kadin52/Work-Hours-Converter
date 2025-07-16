import { useState } from "react";
import FileService from "../services/FileService";
import http from "../http-common";

const DownloadFile = ({ fileType }: { fileType: string }) => {
  const baseURL = http.defaults.baseURL;

  return (
    <>
      <div className="text-center">
        <h3>Download the file</h3>

        <a
          href={`${baseURL}/download-${fileType}`}
          className="btn btn-primary"
          download={`extracted_file.${fileType}`}
        >
          Download Text File
        </a>
      </div>
    </>
  );
};

export default DownloadFile;
