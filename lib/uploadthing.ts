import {
  generateUploadButton,
  generateUploadDropzone,
<<<<<<< Updated upstream
  generateUploader,
=======
>>>>>>> Stashed changes
} from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
<<<<<<< Updated upstream
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const useUploader = generateUploader<OurFileRouter>(); 
=======
export const UploadDropzone = generateUploadDropzone<OurFileRouter>(); 
>>>>>>> Stashed changes
