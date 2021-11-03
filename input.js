const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

let  perviouslySetInterval;
const userInput = (conn, input)=>{

    if(input==='w'){
        console.log("You pressed w key");
        let nId = setInterval(()=>conn.write('Move: up'),100);
        clearInterval(perviouslySetInterval);
        perviouslySetInterval = nId;
        
    }
    if(input==='a'){
        console.log("You pressed a key");
        let nId = setInterval(()=>conn.write('Move: left'),100);
        clearInterval(perviouslySetInterval);
        perviouslySetInterval = nId;
        
    }
    if(input==='s'){
        console.log("You pressed a key");
        let nId = setInterval(()=>conn.write('Move: down'),100);
        clearInterval(perviouslySetInterval);
        perviouslySetInterval = nId;
        
    }
    if(input==='d'){
        console.log("You pressed a key");
        let nId = setInterval(()=>conn.write('Move: right'),100);
        clearInterval(perviouslySetInterval);
        perviouslySetInterval = nId;
        
    }
  
  
    if(input==='e'){
        process.exit();
    }
}

const setupInput = function(conn){
    stdin.on('data', (data)=>userInput(conn, data));
    stdin.resume();
    return stdin;
}

module.exports = setupInput
