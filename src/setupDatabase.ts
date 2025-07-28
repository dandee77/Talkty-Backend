import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://localhost:27017/talkty-backend")
      .then(() => {
        console.log("successfully connected to database.");
      })
      .catch((error) => {
        console.log("error connect to database", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
