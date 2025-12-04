import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Filter from './components/Filter';
import PolicyList from './components/PolicyList';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f5f7fa] text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6">

        <Routes>
          <Route index element={<Home />} />
          <Route path="/browse-policy/filter" element={<Filter />} />
          <Route path="/browse-policy/result" element={<PolicyList />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
