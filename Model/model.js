//define the model schema here

import mongoose from "mongoose";
//todo document structure
const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true, unique: true },
  completed: { type: Boolean, default: false },
  dueAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});
//collection creation with name called todo with todo schema
const todoCollections = mongoose.model('todos', todoSchema);
export default todoCollections;