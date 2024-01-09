<?php 
/*
With cookies we can communicate between JavaScript and PHP. Create a new file and name it 02.php. 
Check if the director cookie is set in the superglobal $_COOKIE and print the cookie value using echo. 
Remember to encode the cookie value using htmlspecialchars! The output should look like the text below.
*/
if (isset($_COOKIE['director'])){
  $director = htmlspecialchars($_COOKIE['director']);

  echo'Hello '.$director.'!';
}