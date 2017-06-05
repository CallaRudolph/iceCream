$(function(){
  var flavors = ["first", "second", "third", "fourth"];

  var kinds = ["Amaretto Cherry", "Spamoni", "Dulce de Leche", "Bourbon Pecan"];

  var counter = 0;

  flavors.forEach(function(flavor){
    $("#" + flavor).prepend(kinds[counter]);
    counter += 1;
  });
});
