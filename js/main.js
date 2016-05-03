$(function(){
  // Code here!

  var imagesArray = [
    {
      title: "couple"
      src: "images/couple.jpeg"
    },
    {
      title: "hands"
      src:"images/fathertime.jpeg"
    },
    {
      title: "buliding"
      src:"images/yellowbuilding.jpeg"
    }
  ]
})
  var $mainElement = ("[data-js='main']");
  var $modalElement = ("[data-js='modal']");

  imagesArray.forEach(function(images){
    var newImage = $("<img>").attr("src", images.src);
    $mainElement.append(newImage);

    $(document).ready(function(){
      $('.thumb-nailcontainer').thumb-nailcontainer({width:100, height:100 });
    });
  })
