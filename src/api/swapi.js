import axios from 'axios';

export const baseUrl = 'https://swapi.dev/api/';

export const getPeopleCount = async () => {
  try {
     const result = await axios.get(`${baseUrl}/people/`).then(({ data }) => data);
     return result;
  }  catch (err) {
      console.log(err);
  }
};

export const getPlanetsCount = async () => {
    try {
        const result = await axios.get(`${baseUrl}/planets/`).then(({ data }) => data);
        return result;
    }  catch (err) {
        console.log(err);
    }
};

export const getShipsCount = async () => {
    try {
        const result = await axios.get(`${baseUrl}/starships/`).then(({ data }) => data);
        return result;
    }  catch (err) {
        console.log(err);
    }
};

export const getFilmsCount = async () => {
    try {
        const result = await axios.get(`${baseUrl}/films/`).then(({ data }) => data);
        return result;
    }  catch (err) {
        console.log(err);
    }
};

export const getVehiclesCount = async () => {
    try {
        const result = await axios.get(`${baseUrl}/vehicles/`).then(({ data }) => data);
        return result;
    }  catch (err) {
        console.log(err);
    }
};

export const getSpeciesCount = async () => {
    try {
        const result = await axios.get(`${baseUrl}/species/`).then(({ data }) => data);
        return result;
    }  catch (err) {
        console.log(err);
    }
};

export const getPlanets = async () => {
    try {
        const result = await axios.get(`${baseUrl}/planets/`);
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const getItem = async (id) => {
    try {
      const result = await axios.get(`${baseUrl}/planets/${id}`);
      return result;
    } catch (err) {
        console.log(err);
    }
};