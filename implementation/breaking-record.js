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
function getRecord(s){
    // Complete this function
    var h=[]
    var l=[]
    var result=[]
    var o=s.map((x)=>{
        return x;
    })
    var p=s.map((x)=>{
        return x;
    })
    var r=o.map((x,i)=>{    
        if(o[i]>o[i+1]){
            o[i+1]=o[i]
        }else if(o[i]<o[i+1]){
            h.push(s[i+1])
        }
    })
    var w=p.map((x,i)=>{
        if(p[i]<p[i+1]){
            p[i+1]=p[i]
        }else if(p[i]>p[i+1]){
            l.push(p[i+1])
        }
    })
    return h.length+" "+l.length
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result)
}
