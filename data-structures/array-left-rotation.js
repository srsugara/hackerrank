function processData(input) {
    //Enter your code here
    r=input.split('\n')[0].split(' ')[1];
    arr2=input.split('\n')[1].split(' ');
    result=[]
    for(i=r;i<arr2.length;i++){
        result.push(arr2[i])
    }
    for(i=0;i<r;i++){
        result.push(arr2[i])
    }
    console.log(result.join(' '))
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
