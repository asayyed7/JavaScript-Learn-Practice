 var database = [
    {
        username: "faraz",
        password: "supersecret"
    }
];

var newsFeed = [
    {
          username: "wamiq",
          timeline: "So that from all that learning!"
    },
    {
        username: "papa",
        timeline: "JavaScript is soooo coool!"
    } 
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username &&
         pass === database[0].password) {
             console.log(newsFeed);
         } else {
             alert("Sorry, wrong username and password!");
         }
}

signIn(userNamePrompt, passwordPrompt);