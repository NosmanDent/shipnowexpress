const express = require("express");
const {
  createTracking,
  updateTracking,
  getTracking,
  getTrackingByTrackingNumber,
} = require("../controllers/trackingController");

const router = express.Router();

// POST a new Tracking
router.post("/", createTracking);

// UPDATE a Tracking
router.patch("/:id", updateTracking);

// GET Tracking Details
router.get("/:trackingNumber", getTracking);

// GET all Tracking by TrackingNumber
router.get("/tracking/:query", getTrackingByTrackingNumber);

module.exports = router;
