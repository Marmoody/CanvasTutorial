class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init () {
        //initialize the game with loading the map (an image)
        const image = new Image();
        image.onload = () => {
            //use drawImage() method of canvas to render the image we loaded below
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "/images/maps/DemoLower.png";

        //Place some Game Objects!
        const hero = new GameObject({
            x: 5, 
            y: 6
        })

        const npc1 = new GameObject({
            x: 7, 
            y: 9,
            src: "/images/characters/people/npc1.png"
        })

        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200)
    }
    
}

