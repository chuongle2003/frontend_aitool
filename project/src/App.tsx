import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import AITemplates from './pages/AITemplates';
import AIChatbox from './pages/AIChatbox';
import ZaloMiniApp from './pages/ZaloMiniApp';
import Settings from './pages/Settings';
import TopUpBTG from './pages/TopUpBTG';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ai-templates" element={<AITemplates />} />
          <Route path="/ai-chatbox" element={<AIChatbox />} />
          <Route path="/zalo-mini-app" element={<ZaloMiniApp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/top-up" element={<TopUpBTG />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;