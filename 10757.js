const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line) {
    const input = line.split(' ')
    main(input);
    rl.close();
}).on("close", function() {
  process.exit();
});
function main(input){
    var n1 = input[0].split('');
    var n2 = input[1].split('');
    if(n1.length > n2.length){
        [n2, n1] = [n1, n2]
    }
    var empty = []
    for(var i=0;i<n2.length-n1.length;i++){
        empty.push('0');
    }
    n1 = [...empty, ...n1];
    var length = n2.length;
    var carry = false;
    for(var i=length-1;i>=0;i--){
        var a = Number(n1[i])+Number(n2[i])+Number(carry)
        carry = false;
        if(a>=10){
            carry = true;
            a = a-10;
        }
        n1[i] = a;
    }
    var ans="";
    if(carry){
        ans = '1'+n1.join('');
    }
    else {
        ans = n1.join('');
    }
    console.log(ans);
}