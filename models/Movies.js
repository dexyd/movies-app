import mongoose from "mongoose";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ratings: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: {
    type: Array,
  },
  isActive: {
    type: Boolean,
  },
  comments: [
    {
      value: { type: String },
      published: { type: Date, default: Date.now },
    },
  ],
});

// Creating Model
const MovieModel = mongoose.model("Movie", movieSchema);

const allDoc = async () => {
  try {
    // Reading/Retrieving All Documents
    const result = await MovieModel.find();
    console.log(result);
    // Iterating over results array to fetch by keys
    result.forEach((movie) => {
      console.log(movie.name);
      console.log(movie.ratings);
      console.log(movie.money.toString());
    });
  } catch (error) {
    console.log(error);
  }
};

const singleDoc = async () => {
  try {
    // Reading/Retrieving A Document
    const result = await MovieModel.findById("658a80ae01f1a3b1449935ff", "name");
    // const result = await MovieModel.findById("658a80ae01f1a3b1449935ff");
    // Retrieving by keys
    // console.log(result.name);
    // console.log(result.ratings);
    // console.log(result.money.toString());
    // console.log(result.comments);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const docWithField = async () => {
  try {
    // Reading/Retrieving A Document By Field
    // const result = await MovieModel.find({ name: "Extraction 2"});
    // Reading/Retrieving A Document With Limit, Skip, Sort, Count & Comparison/Logical Operators
    // const result = await MovieModel.find().limit(2);
    // const result = await MovieModel.find().skip(4);
    // const result = await MovieModel.find().count();
    // const result = await MovieModel.find().countDocuments();
    // const result = await MovieModel.find().sort({ name: 1 });
    // const result = await MovieModel.find().sort({ name: -1 });
    // const result = await MovieModel.find({ money: { $gt: 75000000 } });
    // const result = await MovieModel.find({ money: { $lt: 75000000 } });
    // const result = await MovieModel.find({ money: { $ne: 60000000 } });
    // const result = await MovieModel.find({ $and: [{ money: 80000000 }, { ratings: 5 }] });
    const result = await MovieModel.find({ $or: [{ money: 80000000 }, { ratings: 5 }] });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateById = async (id) => {
  try {
    // Updating A Document
    const result = await MovieModel.updateOne({_id: id}, { ratings: 5 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateMany = async () => {
  try {
    // Updating Many Documents
    const result = await MovieModel.updateMany({ ratings: 3 }, {ratings: 3.5});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async () => {
  try {
    // Deleting A Document By Id
    const result = await MovieModel.findByIdAndDelete("658a80ae01f1a3b1449935ff");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async () => {
  try {
    // Deleting A Document
    const result = await MovieModel.deleteOne({ name: "5-Star Movies" });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteMany = async () => {
  try {
    // Deleting Many Documents
    const result = await MovieModel.deleteMany({ ratings: 3.5 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const insertDoc = async () => {
  try {
    // Creating/Inserting A New Document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "An amazing movie." }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const insertManyDoc = async () => {
  try {
    // Creating/Inserting Many Documents
    const m1 = new MovieModel({
      name: "Hitman Bodyguard 2017",
      ratings: 4,
      money: 65000000,
      genre: ["action", "adventure", "comedy"],
      isActive: true,
      comments: [{ value: "A hilarious movie." }],
    });
    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      ratings: 5,
      money: 70000000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John always does the most." }],
    });
    const m3 = new MovieModel({
      name: "Mission Impossible 1",
      ratings: 4,
      money: 75000000,
      genre: ["action", "spy", "crime", "thriller"],
      isActive: true,
      comments: [{ value: "Tom Cruise never disappoints." }],
    });
    const m4 = new MovieModel({
      name: "Vendetta",
      ratings: 5,
      money: 80000000,
      genre: ["action", "adventure", "SciFi"],
      isActive: true,
      comments: [{ value: "Just a great movie." }],
    });
    const m5 = new MovieModel({
      name: "The Expendables 4",
      ratings: 4,
      money: 60000000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [{ value: "That was way enough action." }],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { allDoc, singleDoc, docWithField, updateById, updateMany, deleteById, deleteOne, deleteMany, insertDoc, insertManyDoc };
