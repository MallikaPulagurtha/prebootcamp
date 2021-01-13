const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin });
const userInput = [];
inp.on("line", (data) => { userInput.push(data); });
inp.on("close", () => {
    /*
    //2
    var a = 10;
    a = 40;
    console.log(a);
    var b = 20;
    console.log(a+b);
    var k = "Mallika";
    var l = "Pulagurtha";
    console.log(k+ " " +l);
    console.log(`Hey this is ${k} `);
    //3
    var username = "Hey this is Mallika Pulagurtha";
    var split = username.split(" ");
    console.log(split);
    //4
    var myname = userInput[0];
    console.log(myname);
    var split = myname.split(" ");
    console.log(split);
    //5
    var myarray = userInput[0].split(" ");
    var myarray1 = userInput[1].split(" ");
    var myarray2 = userInput[2].split(" ");
    console.log(myarray, myarray1, myarray2);
    var sum = parseInt(myarray[0])+parseInt(myarray[1])+parseInt(myarray[2]);
    var sum1 = parseInt(myarray1[0])+parseInt(myarray1[1])+parseInt(myarray1[2]);
    var sum2 = parseInt(myarray2[0])+parseInt(myarray2[1])+parseInt(myarray2[2]);
    console.log(sum);
    console.log(sum1);
    console.log(sum2);
    console.log(sum1+sum2+sum)
    var myarray = userInput[0].split(" ");
    var myarray1 = userInput[1].split(" ");
    var myarray2 = userInput[2].split(" ");
    */
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        var myarray = userInput[i].split(" ");
        console.log(myarray);
        for (var k = 0; k < 3; k++) {
            sum = sum + parseInt((myarray[k]));
        }
        console.log(sum);
    }
    console.log(sum);
});