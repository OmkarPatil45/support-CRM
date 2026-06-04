const Ticket = require("../models/ticket.model");

module.exports.createTicket = async (req, res) => {
    try {
        const {cName,cEmail,subject,description,} = req.body;

        // Validation
        if (!cName || !cEmail || !subject || !description) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // Generate Sequential Ticket ID
        const latestTicket = await Ticket.findOne()
            .sort({ createdAt: -1 }) 
            .select("ticketId");

        let ticketNumber = 1;

        if (latestTicket) {
            ticketNumber =
                parseInt(latestTicket.ticketId.split("-")[1]) + 1;
        }

        const ticketId = `TKT-${String(ticketNumber).padStart(3, "0")}`;

        // Create Ticket
        const ticket = await Ticket.create({
            ticketId,cName,cEmail,subject,description,
        });

        return res.status(201).json({
            ticketId: ticket.ticketId,
            createdAt: ticket.createdAt,
            message: "Ticket created successfully",
        });

    } catch (error) {
        console.error("Create Ticket Error:", error);

        return res.status(500).json({
            message: "Failed to create ticket",
        });
    }
};

module.exports.getTickets = async (req, res) => {
    try {
        const { status, search } = req.query;

        const filter = {};

        if (status) {
            filter.status = status;
        }

        if (search) {
            filter.$or = [
                { ticketId: { $regex: search, $options: "i" } },
                { cName: { $regex: search, $options: "i" } },
                { cEmail: { $regex: search, $options: "i" } },
                { subject: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ];
        }

        const tickets = await Ticket.find(filter)
            .sort({ createdAt: -1 });

        if (!tickets.length) {
            return res.status(404).json({
                success: false,
                message: "No tickets found",
            });
        }

        return res.status(200).json({
            success: true,
            count: tickets.length,
            tickets,
        });      

    } catch (error) {
        console.error("Get Tickets Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch tickets",
        });
    }
};

module.exports.getTicketById = async (req, res) => {
    try {
        const { ticketId } = req.params;

        const ticket = await Ticket.findOne({ ticketId });

        if(!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            })
        }

        return res.status(200).json({ticket})
    } catch (error) {
        console.error("Get Ticket By ID Error:", error);

        return res.status(500).json({message: "Failed to fetch ticket"});
    }

};

module.exports.updateTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;
        const { status } = req.body;
        const validStatuses = ["Open", "In Progress", "Closed"];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({message: "Invalid status value"});
        }

        const ticket = await Ticket.findOneAndUpdate(
// ticketId, status and new are used bcoz we want to find the ticket by its ID, update its status, and return the updated document
            { ticketId },
            { status },
            { new: true } 
        );

        if (!ticket) {
            return res.status(404).json({message: "Ticket not found"});
        }

        return res.status(200).json({
            ticket
        });

    } catch (error) {
        console.error("Update Ticket Error:", error);

        return res.status(500).json({
            message: "Failed to update ticket",
        });
    }
};
