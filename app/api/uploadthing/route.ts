import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

<<<<<<< Updated upstream
=======
// Export routes for Next App Router
>>>>>>> Stashed changes
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
}); 