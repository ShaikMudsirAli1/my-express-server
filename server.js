// External express Module
const express = require("express");

//The Word app usually used when we are referring to Express Module
const app = express();

/* app.get() Method thats provided the express that allows us to 
   specify what should happen when browser gets in touch with
   our server and makes a get request
   first parameter it takes is the location of the get request
   when we type localhost:3000 the get request is being sent
   to the route of our website which is represented by
   a forward slash "/"" (SO IT IS BASICALLY A HOME PAGE)
   WHEN THIS GET REQUEST HAPPENS, WE CAN TRIGGER A CALL BACK
   FUNCTION AND THIS CALLBACK FUNCTION CAN HAVE TWO PARAMETER
   REQUEST> AND RESPONSE> */

app.get("/", function (req, res) {
  //console.log(req);
  res.send("Hello is my response from my location server!!!!!!");
});

//Response> we got his all the information thats associated with
//With the request that was made to our server

/* app.listen() Method this tells it to listen on a specific port for any
 Any HTTP REQUEST that get sent to our server (((port:3000)))
 port is just basically just a channel that we tuned our server to``*/

app.listen(3000, function () {
  /* When we want to see our port is setup and when our server is running
   we can add a callback function() to this method listen
   so we can add an anonymous function, and we are going 
   to callback the console.log("Server sucessfully started on port 3000")*/
  console.log("Server successfully started on port 3000");
  /*After running server we get ERROR- (Cannot GET / ) it means that when our
  browser is trying to get in touch with our server on 
  the port 3000 it is not able to get anything back

  ^^^^ SOLVING THE PROBLEM SO THAT OUR SERVER RESPONDS WHEN A BROWSER
  IS MAKING A REQUEST TO OUR SERVER PORT 3000
  WE HAVE TO SEND THE BROWSER SOME INFORMATION RIGHT TO DISPLAY */
  /*localhost:3000/ here forward slash represents the route that 
  is homepage example: Google home page for webapp/website*/

  /*when we load up a website say google.com then our browser
  will send the request to googles server to get some data
  for this location and google servers when it sees the 
  request, it will send our browser a response and that
  response includes the HTML,CSS,JAVASCRIPT THATS NEEDED
  TO RENDER THIS WEBSITE*/
});
