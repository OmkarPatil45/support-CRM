const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    // u can add ID and ticketId (forign key to tickets)
    ticketId: {
      type: String,
      ref: "Ticket",
    },
    noteId: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const ticketSchema = new mongoose.Schema({
    ticketId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    cName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    cEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },

    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);

