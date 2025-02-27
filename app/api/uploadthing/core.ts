import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

<<<<<<< Updated upstream
const f = createUploadthing();

// Simple auth function - replace with your actual auth
const auth = (req: Request) => ({ id: "user123" });

export const ourFileRouter = {
  // For hero images and larger visuals
  heroImageUploader: f({
    image: {
      maxFileSize: "8MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Hero image uploaded:", file.url);
      return { uploadedBy: metadata.userId };
    }),

  // For feature icons and smaller images
  featureImageUploader: f({
=======

const f = createUploadthing();

// Simple auth function - replace with your actual auth
const auth = (req: Request) => ({ id: process.env.UPLOADTHING_TOKEN });

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define routes with proper configuration
  imageUploader: f({
>>>>>>> Stashed changes
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
<<<<<<< Updated upstream
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Feature image uploaded:", file.url);
=======
      // Auth check
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");
      
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      
>>>>>>> Stashed changes
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 