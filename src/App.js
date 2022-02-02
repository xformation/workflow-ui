import React, { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
const App = () => {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
      <ToastContainer enableMultiContainer containerId={'TOP_RIGHT'} position={toast.POSITION.TOP_RIGHT} />
    </Suspense>
  );
}

export default App;
