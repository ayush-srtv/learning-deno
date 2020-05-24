import { Router } from "https://deno.land/x/oak/mod.ts";


const homeRouter = new Router();
homeRouter
  .get("/", (context) => {
    context.response.body = "Hello world!";
  });

export default homeRouter;