const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["City", "Outstation", "Other"],
    },
    pickup: {
      type: String,
      default: null,
    },
    dropoff: {
      type: String,
      default: null,
    },
    from: {
      type: Date,
      required: true,
    },
    till: {
      type: Date,
      default: null,
    },
    journey: {
      //One side Or Round trip
      type: String,
      default: "One side",
      enum: ["One side", "Round trip"],
    },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Upcoming"],
      default: "Upcoming",
    },
    assignedVehicle: {
      type: mongoose.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    paymentDetails: {
      payment_id: {
        type: String,
        required: true,
      },
      tripAmount: {
        type: Number,
        required: true,
      },
      paidAmount: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
