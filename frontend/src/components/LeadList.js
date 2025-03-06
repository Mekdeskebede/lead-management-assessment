'use client';
import { useGetLeadsQuery } from '../services/leadApi';

const LeadList = () => {
  const { data: leads, isLoading, isError } = useGetLeadsQuery();

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-900/50 text-blue-200 border-blue-700',
      'Engaged': 'bg-yellow-900/50 text-yellow-200 border-yellow-700',
      'Proposal Sent': 'bg-purple-900/50 text-purple-200 border-purple-700',
      'Closed-Won': 'bg-green-900/50 text-green-200 border-green-700',
      'Closed-Lost': 'bg-red-900/50 text-red-200 border-red-700'
    };
    return colors[status] || 'bg-slate-800 text-slate-200 border-slate-600';
  };

  if (isLoading) return (
    <div className="flex justify-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
    </div>
  );
  
  if (isError) return (
    <div className="text-center py-8 text-red-400 bg-red-900/20 rounded-xl border border-red-800">
      Error loading leads
    </div>
  );

  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800">
      <div className="px-8 py-6 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-white">Lead Dashboard</h2>
        <p className="text-slate-400 mt-1">Manage and track your leads</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800">
          <thead className="bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {leads?.map((lead) => (
              <tr key={lead._id} className="hover:bg-slate-800/50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-slate-300">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-300">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-300">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadList; 