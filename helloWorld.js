'use strict';

const HelloWorld = require('./learnFunctions');
const Add2Num = require('./mathFuncs');
const _name = (process.argv[0]==='undefined') ? process.argv[0] : 'Bob Smith';

//(async() => {
    const message = HelloWorld('Trystan Barnes');
    const msg2 = HelloWorld('pizza');
    const msg3 = Add2Num(3,5);
    const msg4 = Add2Num(1345,2496);
    console.log(`
        Message 1: ${message}
        Message 2: ${msg2}
        Message 3: ${msg3}
        message 4: ${msg4}
    `);
//})();
