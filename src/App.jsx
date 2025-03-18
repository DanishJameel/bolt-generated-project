import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
    import { initializeApp } from 'firebase/app';
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
    import LandingPage from './components/LandingPage';
    import LoginPage from './components/LoginPage';
    import SignupPage from './components/SignupPage';
    import AINotesView from './components/AINotesView';
    import ExamChecker from './components/ExamChecker';
    import PricingPage from './components/PricingPage';
    import './App.css';

    // Firebase configuration - Replace with your actual config
    const firebaseConfig = {
      apiKey: "AIzaSyCXiwsJGjhxhJv5gvAkduPazP50QQkN8-Y",
      authDomain: "cssedge002.firebaseapp.com",
      projectId: "cssedge002",
      storageBucket: "cssedge002.firebasestorage.app",
      messagingSenderId: "712727571000",
      appId: "1:712727571000:web:45236e165109abeee4d4cd"
    };

    initializeApp(firebaseConfig);
    const auth = getAuth();

    function App() {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);

      const handleSignup = async (email, password) => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Signup error:", error);
          alert(error.message);
        }
      };

      const handleLogin = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Login error:", error);
          alert(error.message);
        }
      };

      const handleLogout = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Logout error:", error);
          alert(error.message);
        }
      };

      if (loading) {
        return <div>Loading...</div>;
      }

      return (
        <Router>
          <div className="App">
            <header>
              <h1>CSS Edge Portal</h1>
              {user && (
                <div>
                  <span>Welcome, {user.email}</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </header>

            <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={user ? <Navigate to="/ainotes" /> : <LoginPage onLogin={handleLogin} />} />
                <Route path="/signup" element={user ? <Navigate to="/ainotes" /> : <SignupPage onSignup={handleSignup} />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/ainotes" element={user ? <AINotesView user={user} /> : <Navigate to="/login" />} />
                <Route path="/examchecker" element={user ? <ExamChecker user={user} /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>

            <footer>
              <p>&copy; 2024 CSS Edge</p>
            </footer>
          </div>
        </Router>
      );
    }

    export default App;
