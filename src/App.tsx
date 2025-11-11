import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MistBackground from './components/MistBackground';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Gallery from './pages/Gallery';
// import Profile from './pages/Profile';
import About from './pages/About';
// import LoginModal from './components/LoginModal';
import { localAuth } from './auth/localAuth';

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const currentUser = localAuth.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLoginSubmit = async (email: string, displayName: string) => {
    try {
      const user = await localAuth.signIn(email, displayName);
      setUser(user);
      setShowLoginModal(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await localAuth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-foreground/60">Loading AuraPrism...</div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen relative">
        <MistBackground /> {/* Placed here as a sibling to the content container */}
        <div className="relative z-10">
        <Navbar />
        {/* user={user} onLogin={handleLogin} onLogout={handleLogout} /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate user={user} />} />
          <Route path="/gallery" element={<Gallery user={user} />} />
          {/* <Route path="/profile" element={<Profile user={user} onLogin={handleLogin} />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>

        {/* {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onSubmit={handleLoginSubmit}
          />
        )} */}
      </div>
      </div>
    </Router>
  );
}

export default App;