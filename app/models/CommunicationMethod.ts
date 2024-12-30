import mongoose, { Document, Schema } from 'mongoose';

export interface ICommunicationMethod extends Document {
  name: string;
  id: string;
  description?: string;
  sequence: number;
  mandatory: boolean;
}

const CommunicationMethodSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  sequence: { type: Number, required: true },
  mandatory: { type: Boolean, default: false },
});

export default mongoose.models.CommunicationMethod || mongoose.model<ICommunicationMethod>('CommunicationMethod', CommunicationMethodSchema);