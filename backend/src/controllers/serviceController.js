const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const { name, description, price, image } = req.body;

      const service = { name, description, price, image };

      const response = await ServiceModel.create(service);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAll: async (_, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await ServiceModel.findById(id);
      if (!service) {
        return res.status(404).json({ msg: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await ServiceModel.findById(id);

      if (!service) {
        return res.status(404).json({ msg: "Service not found" });
      }

      const deletedService = await ServiceModel.findByIdAndDelete(id);
      res.status(200).json(deletedService);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const { name, description, price, image } = req.body;
      const updatedService = await ServiceModel.findByIdAndUpdate(
        id,
        {
          name,
          description,
          price,
          image,
        },
        { new: true }
      );

      if (!updatedService) {
        return res.status(404).json({ msg: "Service not found" });
      }

      return res.json(updatedService);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = serviceController;
