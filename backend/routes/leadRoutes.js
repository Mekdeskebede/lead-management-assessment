const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');

// POST /leads - Create a new lead
router.post('/', leadController.createLead);

// GET /leads - Get all leads
router.get('/', leadController.getLeads);

module.exports = router; 