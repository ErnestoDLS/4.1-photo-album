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

  imagesArray.forEach(function(images){
    var newImage = $("<img>").attr("src", images.src);
    $mainElement.append(newImage);

    $('fathertime').click(function() {
    $(this).toggleClass('clicked');
});
img {
    width: 50%
    height: auto
}

.clicked {
    width: auto;
}
  })
