import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import VendorsPage from './pages/VendorsPage';
import ContractsPage from './pages/ContractsPage';
import PaymentsPage from './pages/PaymentsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="contracts" element={<ContractsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
