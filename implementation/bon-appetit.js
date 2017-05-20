function processData(input) {
    //Enter your code here
    x=input.split('\n')[0].split(' ')
    y=input.split('\n')[1].split(' ')
    z=input.split('\n')[2]
    y=y.map(Number);
    var temp=0;
    for(i=0;i<y.length;i++){
        if(i!=x[1]){
            temp=temp+y[i];
        }
    }
    result=z-(temp/2)
    if(result==0){
        result='Bon Appetit';
    }
    console.log(result)
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
