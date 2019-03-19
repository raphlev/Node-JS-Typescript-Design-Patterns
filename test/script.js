var lambdaFunction = (event, context, callback) => {
    // Succeed with the string "Hello world!"
    callback(null, 'Hddworld!');
};
console.log(lambdaFunction);

function hello(onBefore,onAfter) {
    if(onBefore) {
        onBefore();
    }
 
    console.log("bonjour");
 
    if(onAfter) {
        onAfter();
    }
}
 
// On appel la fonction
hello(
function(){
     console.log("avant");
},
function(){
    console.log("après");
}
);

function myCallback(toto) {
    () => { toto(toto); }
}

let toto = myCallback(console.log("raphael"));

 