const { Party: PartyModel } = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  return budget >= services.reduce((sum, service) => sum + service.price, 0);
};

const partyController = {
  create: async (req, res) => {
    const { title, author, description, budget, image, services } = req.body;

    try {
      if (services && !checkPartyBudget(budget, services)) {
        return res.status(406).json({ msg: "O seu orçamento é insuficiente" });
      }

      const response = await PartyModel.create({
        title,
        author,
        description,
        budget,
        image,
        services,
      });

      res.status(201).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAll: async (_, res) => {
    try {
      const response = await PartyModel.find();
      return res.json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  get: async (req, res) => {
    try {
      const party = await PartyModel.findById(req.params.id);

      if (!party) {
        return res.status(404).json({ msg: "party not found" });
      }

      res.json(party);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const party = await PartyModel.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Party not found" });
      }

      const deletedParty = await PartyModel.findByIdAndDelete(id);
      res.status(200).json(deletedParty);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const party = await PartyModel.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Party not found" });
      }

      const budget = req.body.budget ?? party.budget;
      const services = req.body.services ?? party.services;

      if (services && !checkPartyBudget(budget, services)) {
        return res.status(406).json({ msg: "O seu orçamento é insuficiente" });
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(
        id,
        {
          title: req.body.title,
          author: req.body.author,
          description: req.body.description,
          budget,
          image: req.body.image,
          services,
        },
        { new: true }
      );

      if (!updatedParty) {
        return res.status(404).json({ msg: "Party not found" });
      }

      return res.json(updatedParty);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = partyController;
