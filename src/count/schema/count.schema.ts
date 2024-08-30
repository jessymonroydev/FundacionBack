import { Schema, Document } from 'mongoose';

export interface Count extends Document {
  route: string;
  count: number;
}

export const CountSchema = new Schema({
  route: { type: String, required: true, unique: true },
  count: { type: Number, default: 1 },
});
