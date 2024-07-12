import React, { useState, useEffect } from 'react';
import { getCandidate, updateCandidate } from '../services/CandidateService';
import { useParams, useNavigate } from 'react-router-dom';

const EditCandidate = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({
        image: null,
        name: '',
        job_post: '',
        salary: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        getCandidate(id).then(response => {
            setCandidate(response.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate({ ...candidate, [name]: value });
    };

    const handleFileChange = (e) => {
        setCandidate({ ...candidate, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in candidate) {
            formData.append(key, candidate[key]);
        }
        updateCandidate(id, formData).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="container mt-5">
            <h2>Edit Candidate</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" name="image" onChange={handleFileChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={candidate.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Post</label>
                    <input type="text" className="form-control" name="job_post" value={candidate.job_post} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control" name="salary" value={candidate.salary} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={candidate.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Update Candidate</button>
            </form>
        </div>
    );
};

export default EditCandidate;
