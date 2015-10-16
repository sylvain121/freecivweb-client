"use strict";

/* global, $ , window */

/**
 * send ajax request for login
 * @param event
 */
function processLogin(event) {
$.post(
  '/player/login',
  {
    username: $('#username').val(),
    password: $('#password').val()
  },
  function(data){
    data = JSON.parse(data);
  $('#usernameGroup').html('<label class="loged">'+data.username+'</label>');
  $('#passwordGroup').html('<label></label>');
  $('#loginButton').html('<button id="loginButton" type="submit" class="btn btn-danger" onclick="processLogout(event)">Logout</button>')
  }
);
}

function processLogout(event){
  $.get("/player/logout");
  window.location.replace("http://"+window.location.hostname+":"+window.location.port);
}