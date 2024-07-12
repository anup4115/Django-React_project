import React, { useState, useEffect } from 'react';
import { getCandidates, deleteCandidate } from '../services/CandidateService';
import { Link } from 'react-router-dom';

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        getCandidates().then(response => {
            setCandidates(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        deleteCandidate(id).then(() => {
            setCandidates(candidates.filter(candidate => candidate.id !== id));
        });
    };

    return (
        <div className="container mt-5">
            <h2>Candidates</h2>
            <div className="row">
                {candidates.map(candidate => (
                    <div className="col-md-4 mb-4" key={candidate.id}>
                        <div className="card">
                            <img src={`http://localhost:8000${candidate.image}`} className="card-img-top" alt={candidate.name} />
                            <div className="card-body">
                                <h5 className="card-title">{candidate.name}</h5>
                                <p className="card-text">{candidate.job_post}</p>
                                <p className="card-text">{candidate.salary}</p>
                                <p className="card-text">{candidate.description}</p>
                                <p className="card-text"><small className="text-muted">{new Date(candidate.date_posted).toLocaleDateString()}</small></p>
                                <Link to={`/edit/${candidate.id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => handleDelete(candidate.id)} className="btn btn-danger ms-2">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CandidateList;
