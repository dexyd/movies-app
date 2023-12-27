import express from "express";
import { allDoc, singleDoc, docWithField, updateById, updateMany, deleteById, deleteOne, deleteMany, insertDoc, insertManyDoc } from "./models/Movies.js";
import connectDB from "./db/connectDB.js";

const app = express();

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://<username>:<password>@<project_name>.tnhgrhu.mongodb.net/<database>?retryWrites=true&w=majority";

connectDB(DATABASE_URL);

// deleteMany();
// deleteOne();
// deleteById();
// updateMany();
// updateById("658a80ae01f1a3b1449935fd");
// docWithField();
// singleDoc();
// allDoc();
// insertDoc();
insertManyDoc();

app.listen(port, () => console.log(`Server listening on port ${port}`));
