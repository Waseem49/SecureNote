import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    note: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const noteModal = mongoose.models.notes || mongoose.model("notes", noteSchema);
export default noteModal;
