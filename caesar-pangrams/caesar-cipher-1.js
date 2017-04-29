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

function result(s,k){
    var newString = [];
    var format=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        for(var i = 0; i < s.length; i++){
            if(format.test(s[i])){
                newString[i]=s[i];
            }else{
                newString[i] = String.fromCharCode(s[i].charCodeAt() + k);
            }
        }
        newString = newString.join('');

        return newString;
}
/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    var sk=s.split('');
    var cipher = result(sk,k);
    console.log(cipher);
}
