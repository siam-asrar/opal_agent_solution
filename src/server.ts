import express from "express";
import bodyParser from "body-parser";
import discovery from "./handlers/discovery";
import toolsRouter from "./handlers/toolsRouter";
import { registerWithOpal } from "./opalAutoRegister";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Opal Agent - Auto Register Service"));

app.post("/discovery", discovery);
app.use("/tools", toolsRouter);

const port = process.env.PORT ? parseInt(process.env.PORT) : 8000;
app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  // register with Opal when server starts (local/docker)
  try {
    await registerWithOpal();
  } catch (e:any) {
    console.error("Auto-registration failed on startup:", e?.message || e);
  }
});
