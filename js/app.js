// Enemies our player must avoid
var Enemy = function(initialX, initialY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = initialX;
    this.y = initialY;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.width=100;
    this.height=50;
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + 200 * dt + player.score* dt ;
    if (this.x >= 500) {
        this.x = getRandomArbitrary()-1000;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 200;
    this.y = 400;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.score=0;
    this.width=60;
    this.height=50;
};
Player.prototype.update = function(dt) {
    this.x = this.x;
    this.y = this.y;
    this.score = this.score;
};
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 588, 500, 20);
    ctx.fillStyle = 'black';
    ctx.font="20px Georgia";
    ctx.fillText(this.score,0,600);
};

Player.prototype.handleInput = function(e) {
    switch (e) {
        case 'left':
            if ((this.x - 100) >= 0) {
                this.x = this.x - 100;
            }
           break;
        case 'right':
            if ((this.x + 100) <= 400) {
                this.x = this.x + 100;
            }
            break;
        case 'up':
            if ((this.y - 83) > -15) {
                this.y = this.y - 83;
            } else if ((this.y - 83) <= -15) {
                this.y = 400;
                this.x = 200;
                this.score = this.score + 100;
            }
            break;
        case 'down':
            if ((this.y + 83) <= 400) {
                this.y = this.y + 83;
            }
            break;
    }
};

/**
 * Returns a random number 
 */
function getRandomArbitrary() {
    return Math.random() * (499);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemyA = new Enemy(getRandomArbitrary(), 60);
var enemyB = new Enemy(getRandomArbitrary(), 145);
var enemyC = new Enemy(getRandomArbitrary(), 230);
var enemyD = new Enemy(getRandomArbitrary(), 60);
var enemyE = new Enemy(getRandomArbitrary(), 145);
var enemyF = new Enemy(getRandomArbitrary(), 230);


var player = new Player;
var allEnemies = [
    enemyA,
    enemyB,
    enemyC,
    enemyD,
    enemyE,
    enemyF

];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
player.render;