class Movement extends Phaser.Scene {
    // Class variable definitions -- these are all "undefined" to start
    graphics;
    curve;
    path;

    constructor(){
        super('sceneName');
        this.my = {sprite: {}};

        this.shipX = 400;
        this.shipY = 750;

    }

    preload() {
        this.load.setPath("./assets/");
        this.load.atlasXML("shipStuff", "spaceShooter2_spritesheet.png", "spaceShooter2_spritesheet.xml");

    }

    create() {
        let my = this.my;

        my.sprite.ship = this.add.sprite(this.shipX, this.shipY, "shipStuff", "spaceShips_008.png");
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        my.sprite.rocket = this.add.sprite(this.shipX, 300, "shipStuff", "spaceMissiles_001.png");
    }


    update() {
        let my = this.my;
        if (this.aKey.isDown) {
            my.sprite.ship.x -= 7;//moves player to the left
            if (my.sprite.ship.x <= 50) my.sprite.ship.x = 50;//dont move player off screen
        }
        if (this.dKey.isDown) {
            my.sprite.ship.x += 7;//moves player to the left
            if (my.sprite.ship.x >= 790) my.sprite.ship.x = 790;//dont move player off screen
        }
        if (this.spaceKey.isDown) {
            console.log("here");
            my.sprite.rocket.x = my.sprite.ship.x;
            my.sprite.rocket.y = my.sprite.ship.y;
            
        }
        my.sprite.rocket.y -= 10;
    }

}