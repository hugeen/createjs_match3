(function() {

    // Gem size constant in pixels
    var GEMSIZE = 48;

    // Margin top equal to 2 gems height
    var MARGINTOP = 2;

    // Game class
    function Game(stage) {

        this.stage = stage;

        // Create a new jMatch3 Grid
        this.grid = new jMatch3.Grid({
            width: 6,
            height: 7,
            gravity: "down"
        });

        // Create new Gem
        var currentGem;
        
        this.newGem = function() {
            currentGem = new Gem(this, "blueDude", 0, 0);
        };
        
        this.newGem();
        
        // Bind a function to each keys
        var keys = {
            left: function() {
                if (currentGem) {
                    currentGem.move(currentGem.x-1, currentGem.y);
                }
            },
            right: function() {
                if (currentGem) {
                    currentGem.move(currentGem.x+1, currentGem.y);
                }
            },
            up: function() {
                
            },
            down: function() {
                if (currentGem) {
                    currentGem.fall(currentGem.x, 6);
                }
            }
        };
        
        // Handle keys
        this.handleKeyPressed = function(key) {
            keys[key]();
        };


    }

    // Gem class
    function Gem(game, type, x, y) {
        this.game = game; // game reference
        this.type = type;

        // Create new bitmap
        this.bitmap = new createjs.Bitmap("assets/" + type + ".png");

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

    // Fall method
    Gem.prototype.fall = function(x, y) {
        
        var gem = this;
        
        // Create a tween animation
        createjs.Tween.get(this.bitmap).to({
            x: x * GEMSIZE,
            // End x position
            y: MARGINTOP * GEMSIZE + y * GEMSIZE // End y position
        }, 500, createjs.Ease.cubicOut).call(function() {
            gem.game.newGem();
        });

    };

    window.initialize = function() {

        // Create new stage on the canvas
        var stage = new createjs.Stage(document.getElementById("match_3"));

        // Create a ticker
        createjs.Ticker.addEventListener("tick", function(event) {
            stage.update(event);
        });

        var game = new Game(stage);

        key('left', function() {
            game.handleKeyPressed('left');
        });

        key('right', function() {
            game.handleKeyPressed('right');
        });

        key('down', function() {
            game.handleKeyPressed('down');
        });

        key('up', function() {
            game.handleKeyPressed('up');
        });

    };

})();
