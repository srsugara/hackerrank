function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    var a=0;
    var b=1;
    var temp=0;
    for(i=0;i<=n-2;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;
}
