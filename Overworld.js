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

        const x = 5;
        const y = 6;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0, //left cut
                0, //top cut
                32, //width of cut
                32, //height of cut
                x * 16 - 8, //x position of the character on the map
                y * 16 - 18, //y position of the character on the map
                32, //size of which the character should be drawn
                32 //size of which the character should be drawn
                )
        }
        shadow.src = "/images/characters/shadow.png";


        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, //left cut
                0, //top cut
                32, //width of cut
                32, //height of cut
                x * 16 - 8, //x position of the character on the map
                y * 16 - 18, //y position of the character on the map
                32, //size of which the character should be drawn
                32 //size of which the character should be drawn
                );
        }
        hero.src = "/images/characters/people/hero.png";

    }
}

