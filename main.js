(function() {

    // Game class
    function Game(stage) {
        
        this.stage = stage;
        
        // Create a new jMatch3 Grid
        this.grid = new jMatch3.Grid({
            width: 6,
            height: 7,
            gravity: "down"
        });

    }
    
    // Gem class
    function Gem(game, type) {
        this.game = game; // game reference
        this.type = type;
        
        // Create new bitmap
        this.bitmap = new createjs.Bitmap("assets/"+type+".png");
        
        // Add it to game stage
        this.game.stage.addChild(this.bitmap);
    }

    window.initialize = function() {

        // Create new stage on the canvas
        var stage = new createjs.Stage(document.getElementById("match_3"));
        var game = new Game(stage);
        new Gem(game, "blueDude");
        stage.update();

    };

})();
