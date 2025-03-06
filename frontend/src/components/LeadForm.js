'use client';
import { useState } from 'react';
import { useAddLeadMutation } from '../services/leadApi';
import { useRouter } from 'next/navigation';

const LeadForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'New'
  });

  const [addLead, { isLoading }] = useAddLeadMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLead(formData).unwrap();
      setFormData({ name: '', email: '', status: 'New' });
      router.push('/');
    } catch (error) {
      console.error('Failed to add lead:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
        <div className="relative px-8 py-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-2">Create New Lead</h2>
            <p className="text-indigo-200">Enter the lead information below</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6 bg-gradient-to-b from-slate-900 to-slate-800">
          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 
                         focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 
                         focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-indigo-300 mb-2">
              Lead Status
            </label>
            <div className="relative">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white
                         focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              >
                <option value="New">New Lead</option>
                <option value="Engaged">Engaged</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed-Won">Closed-Won</option>
                <option value="Closed-Lost">Closed-Lost</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="px-6 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 
                       transition duration-200 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white 
                       hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-indigo-500 
                       focus:ring-offset-2 focus:ring-offset-slate-900 transition duration-200 
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Create Lead'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm; 