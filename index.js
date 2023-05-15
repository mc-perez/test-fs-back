const http = require("http");
//console.log({ http });

//const exportsAnother = require("./another");
//console.log({ exportsAnother });

// const companies = [ 
//     { name: "cc1", isOnline: true },
//     { name: "cc2", isOnline: false }
// ]

function requestController() {

    console.log("Request received!!");

    //console.log({ module });
    //console.log({ global });
    //console.log({ dir: __dirname });

    //console.log( companies )

}

const server = http.createServer(requestController);

server.listen(4000);