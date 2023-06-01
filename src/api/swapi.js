import axios from 'axios';

export const baseUrl = 'https://swapi.dev/api/';

export const getData = async () => {
  try {
     const result = await axios.get(baseUrl).then(({ data }) => data);
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
      const result = await axios.get(`${baseUrl}/planets/${id}/json`);
      return result;
    } catch (err) {
        console.log(err);
    }
};