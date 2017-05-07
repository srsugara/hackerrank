var fetch = require('node-fetch');

test('test get api with jest', () => {
  return fetch('https://api.github.com/users/github').then(data => {
    return data.json();   
  }).then(function(json) {
        expect(json.id).toBe(9919);
    });;
});