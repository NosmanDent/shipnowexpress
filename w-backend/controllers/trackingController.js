const Tracking = require("../models/trackingModel");
const shortid = require("shortid");
const mongoose = require("mongoose");

const createTracking = async (req, res) => {
  const {
    // Sender Information
    fromName,
    fromCompany,
    fromCountry,
    fromAddressOne,
    fromAddressTwo,
    fromCity,
    fromState,
    fromEmail,
    fromPhoneNumber,
    fromPhoneNumberType,
    fromID,
    // Recipient Information
    toName,
    toCompany,
    toCountry,
    toAddressOne,
    toAddressTwo,
    toCity,
    toState,
    toEmail,
    toPhoneNumber,
    toPhoneNumberType,
    toID,
    toCountryPostCode,
    // Item Details
    itemsWeight,
    itemsDimensionLength,
    itemsDimensionWidth,
    itemsDimensionHeight,
    itemsQuantity,
  } = req.body;

  try {
    const tracking = await Tracking.create({
      from: {
        name: fromName,
        company: fromCompany,
        country: fromCountry,
        addressOne: fromAddressOne,
        addressTwo: fromAddressTwo,
        city: fromCity,
        state: fromState,
        email: fromEmail,
        phoneNumber: fromPhoneNumber,
        phoneNumberType: fromPhoneNumberType,
        id: fromID,
      },
      to: {
        name: toName,
        company: toCompany,
        country: toCountry,
        addressOne: toAddressOne,
        addressTwo: toAddressTwo,
        city: toCity,
        state: toState,
        email: toEmail,
        phoneNumber: toPhoneNumber,
        phoneNumberType: toPhoneNumberType,
        id: toID,
        countryPostCode: toCountryPostCode,
      },
      items: {
        weight: itemsWeight,
        dimensions: {
          length: itemsDimensionLength,
          width: itemsDimensionWidth,
          height: itemsDimensionHeight,
        },
        quantity: itemsQuantity,
      },
      trackingNumber: shortid.generate(),
      status: "Processing",
    });

    res.status(200).json(tracking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTracking = async (req, res) => {
  const trackingId = req.params.id;
  const updateData = req.body;

  try {
    const updatedTracking = await Tracking.findByIdAndUpdate(
      trackingId,
      { ...updateData, status: "UpdatedStatus" }, // Update status as needed
      { new: true }
    );

    if (!updatedTracking) {
      return res.status(404).json({ error: "Tracking not found" });
    }

    res.status(200).json(updatedTracking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTracking = async (req, res) => {
  const trackingNumber = req.params.trackingNumber;

  try {
    const tracking = await Tracking.findOne({ trackingNumber });

    if (!tracking) {
      return res.status(404).json({ error: "Tracking not found" });
    }

    res.status(200).json(tracking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTrackingByTrackingNumber = async (req, res) => {
  const { query } = req.params;

  try {
    const trackings = await Tracking.find({
      $or: [{ trackingNumber: { $regex: query, $options: "i" } }],
    }).sort({ createdAt: -1 });

    res.status(200).json(trackings); // Corrected the variable name here
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTracking,
  updateTracking,
  getTracking,
  getTrackingByTrackingNumber,
};
