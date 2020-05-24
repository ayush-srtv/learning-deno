import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import homeRouter from "./src/routes/home.ts";

const app = new Application();
app.use(homeRouter.routes());
app.use(homeRouter.allowedMethods());

await app.listen({ port: 8000 });