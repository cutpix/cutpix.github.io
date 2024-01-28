import type { MiddlewareFactory } from "./types";
import { authMiddleware } from "@clerk/nextjs";

// Add authMiddleware to the list of middlewares
export const withAuthMiddleware: MiddlewareFactory = () => {
  return authMiddleware({ publicRoutes: ["/"] });
};
