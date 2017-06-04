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
    var t = parseInt(readLine());
    var data=[];
    var stack=[];
    for(var i = 0; i < t; i++){
        var s = readLine();
        data.push(s)
        stack=[];
        for(j=0;j<data[i].length;j++){
            if(data[i].charAt(j) == '{' || data[i].charAt(j) == '[' || data[i].charAt(j) == '('){
                stack.push(data[i].charAt(j));
            }
            else if(data[i].charAt(j) == '}' && stack[stack.length-1]== '{'){
                    stack.pop();
                }
            else if(data[i].charAt(j) == ']' && stack[stack.length-1]== '['){
                stack.pop();
            }
            else if(data[i].charAt(j) == ')' && stack[stack.length-1]== '('){
                stack.pop();
            }
            else{
                if(data[i].charAt(j) == '}' || data[i].charAt(j) == ']' || data[i].charAt(j) == ')'){
                    stack.push(data[i].charAt(j));
                }
                else if(data[i].charAt(j) == '{' && stack[stack.length-1]== '}'){
                    stack.pop();
                }
                else if(data[i].charAt(j) == '[' && stack[stack.length-1]== ']'){
                    stack.pop();
                }
                else if(data[i].charAt(j) == '(' && stack[stack.length-1]== ')'){
                    stack.pop();
                }
            }
        }
        if(stack.length == 0){
            console.log('YES');
        }
        else{
            console.log('NO');
        }
    }
}
