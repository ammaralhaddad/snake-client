const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host:"165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //1. When the CLient connects to the Server
  conn.on("connect", () => {
    if(net.Socket){
      console.log("Successfully conected to the server");
    }
    conn.write("Name: AAA")

  });
  

  //2. whete the Client sends the data to the Server and Server receives it
  conn.on("data", (data) => {
    console.log(data)
  });
  return conn;
};


// console.log("Connecting ...");
// connect();
module.exports = connect
