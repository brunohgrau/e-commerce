import { setupWorker } from "msw/browser";
import { handlers } from "./server.js";

export const worker = setupWorker(...handlers);
