import dotenv from "dotenv";

dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;

  private readonly DEFAULT_DATABASE_URL =
    "mongodb://localhost:27017/talkty-backend";
  private readonly DEFAULT_JWT_TOKEN = "thisisatokenfromme";
  private readonly DEFAULT_NODE_ENV = "development";
  private readonly DEFAULT_SECRET_KEY_ONE = "thisisasecretcookiekey";
  private readonly DEFAULT_SECRET_KEY_TWO = "thisisaanothersecretcookiekey";
  private readonly DEFAULT_CLIENT_URL = "http://localhost:3000";
  private readonly DEFAULT_REDIS_HOST = "redis://localhost:6379";

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || this.DEFAULT_JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV || this.DEFAULT_NODE_ENV;
    this.SECRET_KEY_ONE =
      process.env.SECRET_KEY_ONE || this.DEFAULT_SECRET_KEY_ONE;
    this.SECRET_KEY_TWO =
      process.env.SECRET_KEY_TWO || this.DEFAULT_SECRET_KEY_TWO;
    this.CLIENT_URL = process.env.CLIENT_URL || this.DEFAULT_CLIENT_URL;
    this.REDIS_HOST = process.env.REDIS_HOST || this.DEFAULT_REDIS_HOST;
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }
}

export const config: Config = new Config();
