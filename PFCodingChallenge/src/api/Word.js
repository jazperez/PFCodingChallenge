import axios from 'axios';

const fetchWordFromFile1 = (success, error) => {
    axios.fetch('https://frontend-coding-challenge.s3.amazonaws.com/1.txt')
        .then(
            response => success(response.data),
            response => error(response)
        );
};

const fetchWordFromFile2 = (success, error) => {
    axios.fetch('https://frontend-coding-challenge.s3.amazonaws.com/2.txt')
        .then(
            response => success(response.data),
            response => error(response)
        );
};

const fetchWordFromFile3 = (success, error) => {
    axios.fetch('https://frontend-coding-challenge.s3.amazonaws.com/3.txt')
        .then(
            response => success(response.data),
            response => error(response),
        );
};