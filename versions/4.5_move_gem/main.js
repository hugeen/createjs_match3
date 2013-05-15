(function() {
    
    // Gem size constant in pixels
    var GEMSIZE = 48;
    
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
    function Gem(game, type, x, y) {
        this.game = game; // game reference
        this.type = type;
        
        // Create new bitmap
        this.bitmap = new createjs.Bitmap("assets/"+type+".png");
        
        this.move(x, y);
        
        // Add it to game stage
        this.game.stage.addChild(this.bitmap);
    }
    
    // Move method
    Gem.prototype.move = function(x, y) {
        this.x = x;
        this.y = y;
        this.bitmap.x = this.x * GEMSIZE;
        this.bitmap.y = this.y * GEMSIZE;
    };

    window.initialize = function() {

        // Create new stage on the canvas
        var stage = new createjs.Stage(document.getElementById("match_3"));
        var game = new Game(stage);
        new Gem(game, "blueDude", 2, 0);
        stage.update();

    };

})();
