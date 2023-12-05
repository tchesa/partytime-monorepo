import { Schema, model } from "mongoose";
import { serviceSchema, type Service } from "./Service";

export type Party = {
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
  services?: Service[];
};

export const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true }
);

const partyModel = model("Party", partySchema);

export default partyModel;
