import { Schema, model } from "mongoose";

export type Service = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export const serviceSchema = new Schema<Service>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceModel = model("Service", serviceSchema);

export default ServiceModel;
