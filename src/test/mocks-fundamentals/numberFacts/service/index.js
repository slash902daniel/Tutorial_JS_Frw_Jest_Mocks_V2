import fetch from 'node-fetch';

const myurl = "http://numbersapi.com/random/year?json";
//const myurl = "https://jsonplaceholder.typicode.com/users";

export const getRandomNumberFactService = async () => {
    try {
        const response = await fetch(myurl, {
            headers: {"Content-Type": "application/json"},
        });

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("error: " + error);
        return error;
    }
};