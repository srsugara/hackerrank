function processData(input) {
    //Enter your code here
    var arr=input.split('\n');
    var N=Number(arr[0]);
    var Q=Number(arr[N+1]);
    var c;
    var result=[];
    for(h=0;h<Q;h++){
        c=0;
        for(i=1;i<=N;i++){
            if(arr[i]==arr[(N+2)+h]){
                c++
            }
        }
        result.push(c);
    }
    console.log(result.join('\n'));
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
