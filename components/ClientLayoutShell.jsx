'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SplashScreen from './SplashScreen';
import ScrollIndicator from './ScrollIndicator';
import WhatsAppWidget from './WhatsAppWidget';
import EstimateModal from './EstimateModal';
import ToastContainer from './ToastContainer';

export default function ClientLayoutShell({ children }) {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [prefilledEstimateData, setPrefilledEstimateData] = useState({});
  const [toast, setToast] = useState(null);

  const handleOpenEstimateModal = (data = {}) => {
    setPrefilledEstimateData(data);
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimateModal = () => {
    setIsEstimateModalOpen(false);
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <>
      <SplashScreen />

      <Header onOpenEstimateModal={() => handleOpenEstimateModal({})} />

      <main className="min-h-screen bg-white">
        {React.cloneElement(children, {
          onOpenEstimateModal: handleOpenEstimateModal,
          onShowToast: showToast,
        })}
      </main>

      <ScrollIndicator totalSections={6} />
      <WhatsAppWidget />

      <Footer onOpenEstimateModal={() => handleOpenEstimateModal({})} />

      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimateModal}
        prefilledData={prefilledEstimateData}
        onShowToast={showToast}
      />

      <ToastContainer toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
