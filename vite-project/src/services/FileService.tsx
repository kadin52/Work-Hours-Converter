import http from "../http-common";

const upload = (file: File): Promise<any> => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const downloadText = (): Promise<Blob> => {
  return http.get("/download-text", {
    responseType: "blob",
    withCredentials: true,
  });
};

const downloadCsv = (): Promise<Blob> => {
  return http.get("/download-csv", {
    responseType: "blob",
    withCredentials: true,
  });
};

// const getFiles = (): Promise<any> => {
//   return http.get("/files");
// };

const FileService = {
  downloadText,
  downloadCsv,
  upload,
};

export default FileService;
