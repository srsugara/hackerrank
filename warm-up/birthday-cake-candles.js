process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    height = readLine().split(' ');
    height = height.map(Number);
    var b=height.reduce((x,y,i)=>{
        if(x>y){
            y=x
        }
        return y
    },0)
    var z=[]
    var c=height.map(x=>{
        if(x==b){
           z.push(b) 
        }
       
    })
    console.log(z.length)
}

