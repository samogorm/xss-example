import mongoose, { Schema } from 'mongoose';

const DataSchema: Schema = new Schema({
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<any>('Data', DataSchema);
