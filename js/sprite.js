var Sprite = function(imagePath) {
  var
    image = new Image(),
    loaded = false;

  image.onload = function() {
    loaded = true;
  };

  image.src = imagePath;

  this.ready = function() {
    return loaded;
  };

  this.draw = function(context) {
    if (loaded) {
      context.drawImage(image, 0, 0);
    }
  };
};