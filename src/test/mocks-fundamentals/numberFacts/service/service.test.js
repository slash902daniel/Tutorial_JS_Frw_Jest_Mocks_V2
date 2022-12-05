import {getRandomNumberFactService} from "./";

//import so we can override behavior later
import fetch from 'node-fetch';

//mock all from this module
jest.mock("node-fetch"); 

beforeEach(() => {
    fetch.mockClear();   //clear each mock iteration
})

test('should return a valid response', async () => {

    //override dependency behavior
    fetch.mockReturnValueOnce({
        json: () => Promise.resolve({
            text: "Test Pass"
        })
    })

    const data = await getRandomNumberFactService();

    expect(data.text).toBe("Test Pass");

});

test('should return an invalid response', async () => {

    //override dependency behavior
    fetch.mockReturnValueOnce({
        json: () => Promise.reject(new Error("error expected"))
    });

    const data = await getRandomNumberFactService();

    expect(data).toBeInstanceOf(Error);
    expect(data.message).toBe("error expected");
});