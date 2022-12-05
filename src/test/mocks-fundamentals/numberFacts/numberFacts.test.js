import { getRandomNumberFact } from ".";

//import so we can override behavior later
import {getRandomNumberFactService} from "./service";

//mock all from this folder
jest.mock("./service"); 


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

});