var fetch = require('node-fetch');

function getApi(endpoint){
    return fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
}

module.export=getApi;
    