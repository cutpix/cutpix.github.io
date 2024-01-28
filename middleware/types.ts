import { NextMiddleware } from "next/server";

// MiddlewareFactory is a function that accepts a NextMiddleware function and returns a NextMiddleware function. 
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
