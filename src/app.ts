import express, { Express } from "express";
import { TalktyServer } from "./setupServer";
import databaseConnection from "./setupDatabase";

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: TalktyServer = new TalktyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
