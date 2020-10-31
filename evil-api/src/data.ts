import mongoose, { Schema } from 'mongoose';

const DataSchema: Schema = new Schema({
  data: {
    type: String,
    required: true
  },
});

export default mongoose.model<any>('Data', DataSchema);