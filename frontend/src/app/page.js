'use client';
import LeadList from '../components/LeadList';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <LeadList />
      </div>
    </div>
  );
}
