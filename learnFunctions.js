'use strict';

function HelloWorld(firstName){
    //singal lined comments tow help me at a later point 

    /*
        THIS is a multilined comment 
        it allows me to create notes 
        that will help me later.
    */
    
    let dateTime = new Date();
    let helloMsg;

    try{
        
        helloMsg = `Hello, ${firstName}, How are you doing today ${dateTime}?`;

    } catch (err){
        console.log('Unable to process ==> : ', err)
    }

    return helloMsg; 

}

module.exports = HelloWorld