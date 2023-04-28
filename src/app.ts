import "express-async-errors";
import express, { Application } from "express";
import { movieRouter } from "./routes/movies.routes";
import { errorHandler } from "./erros";


const app: Application = express();

app.use(express.json());
app.use("/movies", movieRouter);

app.use(errorHandler);

export default app;
