const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const trackingSchema = new Schema(
  {
    // Sender Information
    from: {
      name: { type: String, required: true },
      company: { type: String, required: true },
      country: { type: String, required: true },
      addressOne: { type: String, required: true },
      addressTwo: String,
      city: { type: String, required: true },
      state: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
      phoneNumberType: { type: String, required: true },
      id: { type: String, required: true },
    },
    // Recipient Information
    to: {
      name: { type: String, required: true },
      company: { type: String, required: true },
      country: { type: String, required: true },
      addressOne: { type: String, required: true },
      addressTwo: String,
      city: { type: String, required: true },
      state: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: Number, required: true },
      phoneNumberType: { type: String, required: true },
      id: { type: String, required: true },
      countryPostCode: { type: String, required: true },
    },
    // Item Details
    items: {
      weight: { type: Number, required: true },
      dimensions: {
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
      },
      quantity: { type: Number, required: true },
    },
    trackingNumber: { type: String, unique: true, default: shortid.generate },
    status: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tracking", trackingSchema);
