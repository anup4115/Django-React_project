import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CandidateList from './components/CandidateList';
import AddCandidate from './components/AddCandidate';
import EditCandidate from './components/EditCandidate';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<CandidateList />} />
                    <Route path="/add" element={<AddCandidate />} />
                    <Route path="/edit/:id" element={<EditCandidate />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
