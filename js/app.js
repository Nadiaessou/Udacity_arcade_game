/////////////////////////////// ENEMY //////////////////////////////////////////////////////////

// List of cars
var listOfCars = ['images/car2.png', 'images/car1.png', 'images/car3.png']

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 300) + 100);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = listOfCars[Math.floor(Math.random() * listOfCars.length)];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x > 601) {
        this.x = -90;
    }

    // check collision and play alert
    if (player.x < this.x + 90 && player.x + 30 > this.x && player.y < this.y + 20 && player.y + 30 > this.y) {
        player.sprite = 'images/boy2.png';
        setTimeout (function () {
        player.x = 200;
        player.y = 400;
        player.sprite = 'images/boy.png';
        }, 400);
    };
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(dt) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/////////////////////////////// PLAYER //////////////////////////////////////////////////////////


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/boy.png';
};

Player.prototype.update = function(dt) {
    if (this.x > 500) {
        this.x = 500;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.y > 380) {
        this.y = 380;
    }

    if (this.y < -5) {
        this.y = -5;
        player.sprite = 'images/boy3.png';
    }

    if (object.x === 700 && object.y === 700 && 
        object2.x === 700 && object2.y === 700 &&
        object3.x === 700 && object3.y === 700 &&
        this.y < 0) {
        this.y = -60;
        player.sprite = 'images/boy-win.png';
        Player.prototype.handleInput = function(keyPress) {
            return false;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.speed + 50;
            this.sprite = 'images/boy-left.png';
            break;
        case 'up':
            this.y -= this.speed + 27;
            this.sprite = 'images/boy-up.png';
            break;
        case 'right':
            this.x += this.speed + 50;
            this.sprite = 'images/boy-right.png';
            break;
        case 'down':
            this.y += this.speed + 27;
            this.sprite = 'images/boy.png';
            break;
    }
};


/////////////////////////////// OBJECT1 //////////////////////////////////////////////////////////

// Set Object 1
var Object = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/object1.png';
};

// Check for collisions between player and object 1
Object.prototype.update = function() {
    
    if (player.x < this.x + 90 &&
        player.x + 30 > this.x &&
        player.y < this.y + 20 &&
        30 + player.y > this.y) {
        this.collision();
    }
};

// Draw object 1 on the screen
Object.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Hide the object off canvas
Object.prototype.collision = function() {
    this.x = 700;
    this.y = 700;
};


/////////////////////////////// OBJECT2 //////////////////////////////////////////////////////////

// Set Object 2
var Object2 = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/object2.png';
};

// Check for collisions between player and object 2
Object2.prototype.update = function() {
    
    if (player.x < this.x + 90 &&
        player.x + 30 > this.x &&
        player.y < this.y + 20 &&
        30 + player.y > this.y) {
        this.collision();
    }
};

// Draw object 2 on the screen
Object2.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Hide the object 2 off canvas
Object2.prototype.collision = function() {
    this.x = 700;
    this.y = 700;
};


/////////////////////////////// OBJECT3 //////////////////////////////////////////////////////////

// Set Object 3
var Object3 = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/object3.png';
};

// Check for collisions between player and object 3
Object3.prototype.update = function() {
    
    if (player.x < this.x + 90 &&
        player.x + 30 > this.x &&
        player.y < this.y + 20 &&
        30 + player.y > this.y) {
        this.collision();
    }
};

// Draw object 3 on the screen
Object3.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Hide the object 3 off canvas
Object3.prototype.collision = function() {
    this.x = 700;
    this.y = 700;
};


/////////////////////////////////////////////////////////////////////////////////////////////////



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPosition = [60, 140, 225, 307];
var player = new Player(200, 380, 50);
// Place objects
var object = new Object(300, 73);
var object2 = new Object2(100, 240);
var object3 = new Object3(500, 150);

enemyPosition.forEach(function(positionY) {
    enemy = new Enemy(0, positionY, Math.floor(Math.random() * 300));
    allEnemies.push(enemy);
});

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