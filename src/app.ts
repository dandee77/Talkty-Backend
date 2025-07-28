import express, { Express } from "express";
import { TalktyServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: TalktyServer = new TalktyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
