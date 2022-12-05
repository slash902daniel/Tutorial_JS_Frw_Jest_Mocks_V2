
//Simple property example

// describe('', () => {
//     it('example1', () => {
//         const mock1 = jest.fn();
//         console.log(mock1);
    
//         expect()....

//     });

// });

test('example1', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    console.log(mock1);

    mock1();
    mock2(true);

    expect(mock1).toHaveBeenCalled();
    expect(mock2).toHaveBeenCalledWith(true);
});


//MORE EXAMPLES / EXERCISES


