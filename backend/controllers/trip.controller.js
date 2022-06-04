const tripModel = require("../models/trip");
const errorResponse = require("../utils/errorResponse");

exports.add = (req, res) => {
  try {
    req.body.client = req.user._id;
    const trip = new tripModel(req.body);
    trip.save((err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      res.status(201).json({
        success: true,
        data,
        message: "Booking has been initiated successfully",
      });
    });
  } catch (err) {
    errorResponse(res, err);
  }
};
