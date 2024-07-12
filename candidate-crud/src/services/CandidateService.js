import axios from 'axios';

const API_URL = 'http://localhost:8000/api/candidates/';

export const getCandidates = () => {
    return axios.get(API_URL);
};

export const createCandidate = (candidate) => {
    return axios.post(API_URL, candidate, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const getCandidate = (id) => {
    return axios.get(`${API_URL}${id}/`);
};

export const updateCandidate = (id, candidate) => {
    return axios.put(`${API_URL}${id}/`, candidate, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const deleteCandidate = (id) => {
    return axios.delete(`${API_URL}${id}/`);
};
