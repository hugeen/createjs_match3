(function() {

    // Game class
    function Game(stage) {
        
        // Create a new jMatch3 Grid
        this.grid = new jMatch3.Grid({
            width: 6,
            height: 7,
            gravity: "down"
        });
        
    }

    window.initialize = function() {
        
        // Create new stage on the canvas
        var stage = new createjs.Stage(document.getElementById("match_3"));
        var game = new Game(stage);
        
        // Create a new Bitmap Object
        var bitmap = new createjs.Bitmap("assets/blueDude.png");
        
        // Add it to stage
        stage.addChild(bitmap);
        
        // Update the stage to display the Bitmap
        stage.update();
        
    };

})();
