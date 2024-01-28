import { withHeaders } from "./middleware/with-headers";
import { withAuthMiddleware } from "./middleware/with-auth-middleware";

import { stackMiddlewares } from "./middleware/stack-middlewares";

const middlewares = [withHeaders, withAuthMiddleware];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
