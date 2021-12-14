const mongoose = require("mongoose");

 const mongooseConnect = () => {
  // connect db mongoose
  const dburl = `mongodb+srv://test:testtest@dblouis.svmsb.mongodb.net/belajarangular?retryWrites=true&w=majority`

  // const dburl = `mongodb://localhost/belajarangular`; // process.env.DBURI
  const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose.connect(dburl, connectionOptions);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection Error:"));
  db.once("open", () => {
    console.log(`Mongoose Connected!`);
  });
};

module.exports = mongooseConnect;