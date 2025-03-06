const Lead = require('../models/Lead');
const BaseResponse = require('../utils/BaseResponse');

const leadController = {
  // Create new lead
  async createLead(req, res) {
    try {
      const lead = new Lead(req.body);
      const savedLead = await lead.save();
      return res.status(201).json(BaseResponse.success(savedLead, 'Lead created successfully'));
    } catch (error) {
      return res.status(400).json(BaseResponse.error('Failed to create lead', error.message));
    }
  },

  // Get all leads
  async getLeads(req, res) {
    try {
      const leads = await Lead.find();
      return res.status(200).json(BaseResponse.success(leads, 'Leads retrieved successfully'));
    } catch (error) {
      return res.status(500).json(BaseResponse.error('Failed to fetch leads', error.message));
    }
  }
};

module.exports = leadController; 