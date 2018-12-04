const add = (a,b) => a + b ;
const generateGreeting = (name ='Anonymouse') => `Hello ${name}!`;


test('should add two numbers', () => {
    const result =add(3,4);
    expect(result).toBe(7);

});

// test('should check name', () => {
//     const result =generateGreeting('Mihaela');
//     expect(result).toBe('Hello Mihaela!');

// });
// test('should check missing name', () => {
//     const result =generateGreeting();
//     expect(result).toBe('Hello Anonymouse!');

// });