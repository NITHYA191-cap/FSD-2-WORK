let flexibleValue:any=12;
flexibleValue="Now i am a string";
flexibleValue=true;

let mysteryValue:unknown = "Hello Nithya";
if(typeof mysteryValue==="string"){
    console.log("Length of unknown string:"+mysteryValue.length);
}

function logNotification(message:string):void{
    console.log("Alert:"+message);
}
logNotification("Environment Setup Complete!");