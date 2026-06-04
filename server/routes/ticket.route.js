const express = require("express");

const {createTicket,getTickets,getTicketById,updateTicket,} = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:ticketId", getTicketById);
router.put("/:ticketId", updateTicket);

module.exports = router;