$(function(){
  var flavors = ["first", "second", "third", "fourth"];

  var kinds = ["Amaretto Cherry", "Spamoni", "Dulce de Leche", "Bourbon Pecan"];


  for (var i = 0; i <= kinds.length - 1; i += 1) {
    $("#" + flavors[i]).prepend(kinds[i]);
  }
  // flavors.forEach(function(flavor){
  //   $("#" + flavor).prepend(kinds[counter]);
  //   counter += 1;
});
