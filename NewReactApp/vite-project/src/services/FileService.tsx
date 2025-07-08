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

// const downloadText = (): Promise<any> => {
//   return http.get("/download-text", {
//     responseType: "blob",
//     withCredentials: true,
//   });
// };

// const getFiles = (): Promise<any> => {
//   return http.get("/files");
// };

const FileService = {
  upload,
  // downloadText,
  // getFiles,
};

export default FileService;
