// Quinlan Hoang
// Rocket Patrol Mods
// Time est:
// Mods:
// Allow the player to control the Rocket after it's fired (1)
// Implement mouse control for player movement and left mouse click to fire (5)

// Citations

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

//sets UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

//reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT