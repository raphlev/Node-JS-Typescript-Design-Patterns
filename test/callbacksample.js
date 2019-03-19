// see https://medium.com/@saurabhkumar_4718/node-js-callback-861f29642190
// see https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/

// write my own custom Callback
// Note : According to coding convention of Node JS, the first argument in callback function is for an error object and second argument is for a successful response

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

// User input exit.
if(data){

    var checkNumberType = function (arg,callback_myMethod) {
        if(Number.isInteger(parseInt(arg)) === false){
            return callback_myMethod("not a number: " + arg,null);// first argument returns error in a node.js callback function
        }
        callback_myMethod(null,"yes it is a number: " + arg);// second argument for a successfull response in a node.js callback function
    }
    checkNumberType(data,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });


    }
    else
    {
        // Print user input in console.
        console.log('User Input Data : ' + data);
    }
});