import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Survey from './pages/Survey';
import Settings from './pages/Settings';
import Customer from './pages/Customer';
import ConnectionList from './pages/connection/ConnectionList';
import ConnectionCreate from './pages/connection/ConnectionCreate';
import ModelList from './pages/model/ModelList';
import ModelCreate from './pages/model/ModelCreate';
import SyncList from './pages/sync/SyncList';
import ModelView from './pages/model/ModelView';
import SyncCreate from './pages/sync/SyncCreate';
import SyncView from './pages/sync/SyncView';
import ConnectionView from './pages/connection/ConnectionView';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1  bg-blue-50 flex flex-col">
          <Navbar />
          <div className="h-screen flex-1 overflow-y-scroll bg-blue-100">
            <Routes>
              {/* DASHBOARD */}
              <Route path="/dashboard" element={<Dashboard />} />
              {/* CONNECTIONS */}
              <Route path="/connections" element={<ConnectionList />} />
              <Route path="/connections/create" element={<ConnectionCreate />} />
              <Route path="/connections/:id" element={<ConnectionView />} />
              {/* AUDIENCE MODELS */}
              <Route path="/audiencemodels" element={<ModelList />} />
              <Route path="/audiencemodels/:id" element={<ModelView />} />
              <Route path="/audiencemodels/create" element={<ModelCreate />} />
              {/* AUDIENCE SYNCS */}
              <Route path="/audiencesyncs" element={<SyncList />} />
              <Route path="/audiencesyncs/create" element={<SyncCreate />} />
              <Route path="/audiencesyncs/:id" element={<SyncView />} />
              {/* CUSTOMER */}
              <Route path="/customer" element={<Customer />} />
              {/* INBOX */}
              <Route path="/inbox" element={<Inbox />} />
              {/* SURVEY */}
              <Route path="/survey" element={<Survey />} />
              {/* SETTINGS */}
              <Route path="/settings" element={<Settings />} />
              {/* UTIL */}
              <Route path="/*" element={<NotFound />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;