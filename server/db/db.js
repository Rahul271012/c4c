import mongoose from "mongoose";

const connect = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful");
  } catch (err) {
    console.error(err);
  }
};

export default connect;
