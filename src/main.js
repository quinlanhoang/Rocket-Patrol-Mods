// Quinlan Hoang
// Rocket Patrol Mods
// Time est: 7 hours
// Mods:
// Allow the player to control the Rocket after it's fired (1)
// Implement mouse control for player movement and left mouse click to fire (5)
// Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// Display the time remaining (in seconds) on the screen (3)
// Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
// ^ adds 3 seconds for successfully hitting a rocket and -5 seconds for missing
// Create a new scrolling tile sprite for the background (1)

// Citations:
// Phaser, Altice
// https://www.joshmorony.com/how-to-create-an-accurate-timer-for-phaser-games/
// https://stackoverflow.com/questions/55458326/how-to-use-listen-to-event-only-for-mouse-left-click
// https://stackoverflow.com/questions/28104605/how-to-find-the-mouse-position-x-y-using-phaser
// https://www.youtube.com/watch?v=VqnyT_hGOQU

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