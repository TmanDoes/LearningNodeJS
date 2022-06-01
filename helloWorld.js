'use strict';

const {HelloWorld,Madlib} = require('./learnFunctions');
const  {Add2Num,Subtract2Num,Multi2Num,Divi2num,Circumfrence,CircumfrenceGivenRadius} = require('./mathFuncs');
const _name = (process.argv[0]==='undefined') ? process.argv[0] : 'Bob Smith';



//(async() => {
    const message = HelloWorld('Trystan Barnes');
    const msg2 = HelloWorld('pizza');
    const msg3 = Add2Num(3,5);
    const msg4 = Add2Num(1345,2496);
    const msg5 = Subtract2Num(2,1);
    const msg6 = Subtract2Num(0,5);
    const msg7 = Multi2Num(9,7);
    const msg8 = Multi2Num(7,2);
    const msg9 = Divi2num(45,5);
    const msg10 = Circumfrence(8);
    const msg11 = CircumfrenceGivenRadius(2.82842712474619);
    const msg12 = Madlib('German shepard','tail', 'great');

    console.log(`
        Message 1: ${message}
        Message 2: ${msg2}
        add 3+5: ${msg3}
        add 1345+2496: ${msg4}
        subtract 2-1: ${msg5}
        subtract 0-5: ${msg6}
        multiply 9*7: ${msg7}
        multiply 7*2: ${msg8}
        divide 45/5: ${msg9}
        circumfrence : ${msg10}
        circumfrence radius 4: ${msg11}
        Madlibs ${msg12}
    `);
//})();
