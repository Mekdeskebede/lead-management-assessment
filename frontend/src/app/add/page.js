'use client';
import LeadForm from '../../components/LeadForm';
import Navigation from '../../components/Navigation';

export default function AddLead() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <LeadForm />
      </div>
    </div>
  );
} 