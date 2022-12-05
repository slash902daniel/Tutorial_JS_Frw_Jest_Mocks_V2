import { getRandomNumberFact } from ".";

//import so we can override behavior later
import {getRandomNumberFactService} from "./service";

//mock all from this folder
jest.mock("./service"); 

beforeEach(() => {
    getRandomNumberFactService.mockClear();   //clear each mock iteration
})

test('should return a random number fact', async () => {

    //override dependency behavior
    getRandomNumberFactService.mockReturnValueOnce({
        "text": "1732 is the year that the United Secession Church is formed in Scotland.",
        "number": 1732,
        "found": true,
        "type": "year"
        });

    const numberFact = await getRandomNumberFact();
    
    expect(numberFact.text).toBe("1732 is the year that the United Secession Church is formed in Scotland.");
    expect(getRandomNumberFactService).toBeCalledTimes(1);
});


test('should return an error when the service resolves throws an exception', async () => {

    //override dependency behavior
    getRandomNumberFactService.mockReturnValueOnce(new Error("ups"));

    const numberFact = await getRandomNumberFact();

    expect(numberFact).toBeInstanceOf(Error);
    expect(getRandomNumberFactService).toBeCalledTimes(1);
});