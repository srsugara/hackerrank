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
    var time = readLine();
    var last=time.slice(-2);
    var hour=parseInt(time.substring(0,2))
    var minute=time.substring(3,5)
    var second=time.substring(6,8)
    if(last=='PM' && hour<12){
        hour=hour+12;        
    }else if(last=='AM'){
        if(hour==12){
           hour='0'+(hour-12)
        }else{
           hour='0'+hour
        }
    }
    console.log(hour+':'+minute+':'+second)
}