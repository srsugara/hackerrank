function processData(input) {
    //Enter your code here
    var N=input.split('\n')[0];
    var query=[];
    var stack=[];
    var result=[];
    for(i=0;i<N;i++){ 
        if(input.split('\n')[i+1].charAt(0)=='1'){
            stack.push(Number(input.split('\n')[i+1].split(' ')[1]));
        }
        else if(input.split('\n')[i+1].charAt(0)=='2'){
            stack.pop();
        }
        else if(input.split('\n')[i+1].charAt(0)=='3'){
            max=Math.max.apply(null, stack);
            result.push(max);
        }
    }
    console.log(result.join('\n')) 
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
