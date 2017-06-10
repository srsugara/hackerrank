function processData(input) {
    //Enter your code here
    var array=input.split('\n')[1].split(' ');
    var array=array.map(Number);
    var result=[];
    for(i=0;i<=array.length-2;i++){
        for(j=i+1;j<=array.length-1;j++){
            if(array[i]>array[j]){
                result.push(array[i]-array[j]);
            }
        }
    }
    console.log(Math.min.apply(null,result));
    
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
