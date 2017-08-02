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

/* Time Out
function main() {
    var n = parseInt(readLine());
    var result = '';
    var arr = '';
    
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if (op == 'add') {
          arr=arr+','+contact;
        } else {
          result += arr.split(',' + contact).length - 1 + '\n';
        }
    }
    console.log(result)

} */

function main() {
      var n = parseInt(readLine());
      var contacts = '';
      var result = '';
      var indexTable = {};

      for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var contact = op_temp[1];

        if (op_temp[0] == 'add') {
          indexTable[contact[0]] = indexTable[contact[0]] || '';
          indexTable[contact[0]] += ';' + contact;
        } else {
          var table = indexTable[contact[0]] || '';
          result += table.split(';' + contact).length - 1 + '\n';
        }
      }

      console.log(result);

}
