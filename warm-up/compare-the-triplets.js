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

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var index=[]
    index.push(a0,a1,a2,b0,b1,b2)
    var m=[];
    var n=[0,0];
    var A=[];
    A.push(a0,a1,a2);
    var B=[];
    B.push(b0,b1,b2);
    for (i=0;i<3;i++){
        if(A[i]>B[i]){
            m.push(1,0)
        }else if(A[i]<B[i]){
            m.push(0,1)
        }else if(A[i]==B[i]){
            m.push(0,0)
        }
    }
    for(j=0;j<m.length;j++){
        if(j%2==0){
            n[0]=n[0]+m[j]
        }else if(j%2==1){
            n[1]=n[1]+m[j]
        }
    }
    return n
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    
}
