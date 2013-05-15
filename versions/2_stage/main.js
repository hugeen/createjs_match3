(function() {
    
    var stage;
    
    window.initialize = function() {
        
        // Create new stage on the canvas
        stage = new createjs.Stage(document.getElementById("match_3"));
        
        // Create a new Bitmap Object
        var bitmap = new createjs.Bitmap("assets/blueDude.png");
        
        // Add it to stage
        stage.addChild(bitmap);
        
        // Update the stage to display the Bitmap
        stage.update();
        
    };

})();
