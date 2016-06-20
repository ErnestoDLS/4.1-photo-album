$(function(){

  var albumOne = [
    {
      title: "1",
      src: "images/couple.jpeg"
    },
    {
      title: "2",
      src: "images/yellowbuilding.jpeg"
    },
    {
      title: "3",
      src: "images/squad.jpg"
    }
  ]

  var $photoList = $("[data-js='photo__list']");
  var $modalCouple = $("[data-js='modal__couple']");
  var $modalBuilding = $("[data-js='modal__building']");
  var $modalDogs = $("[data-js='modal__dogs']");
  var $backButton = $("[data-js='back__button']");

  albumOne.forEach(function(image){

    var imageContainer = $(`<li class= 'image__container'>${image.title}</li>`);

    var newImage = $("<img class='image'>").attr("src", image.src);

    imageContainer.append(newImage);

    $photoList.append(imageContainer);
  });


  $photoList.on("click", "li:first-child", function(){
    $modalCouple.show("modal__hide--couple")
  })

  $photoList.on("click", "li:nth-child(2)", function(){
    $modalBuilding.show("modal__hide--building")
  })

  $photoList.on("click", "li:nth-child(3)", function(){
    $modalDogs.show("modal__hide--dogs")
  })

  $backButton.on("click", function(){
    $modalCouple.hide("modal__hide--couple")
  })

  $backButton.on("click", function(){
    $modalBuilding.hide("modal__hide--building")
  })

  $backButton.on("click", function(){
    $modalDogs.hide("modal__hide--dogs")
  })

});
