 var database = [
    {
        username: "faraz",
        password: "supersecret"
    },
    {
        username: "papa",
        password: "123"
    },
    {
        username: "mammi",
        password: "786"
    }
];

var newsFeed = [
    {
          username: "faraz",
          timeline: "So that from all that learning!"
    },
    {
        username: "papa",
        timeline: "JavaScript is soooo coool!"
    }, 
    {
        username: "mammi",
        timeline: "JavaScript is soooo coool!"
    }
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password?");
 
function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++){
        if (database[i].username === user &&
            database[i].password === pass) {
            return true;
        } 
    }
    return false;
}
 
function signIn(user, pass) {
    if (isUserValid(user, pass)) {
            console.log(newsFeed); 
         } else {
             alert("Sorry, wrong username and password!");
         }
}  

signIn(userNamePrompt, passwordPrompt);