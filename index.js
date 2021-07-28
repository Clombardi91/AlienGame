const canvas = document.getElementById('inner');
const context = canvas.getContext('2d');
const rock = document.getElementById('rock');
const score = document.getElementById('score');




class Alien {
    constructor(context, x, y, height, width) {
        this.image = document.getElementById("img_alien");
        this.context = context;
        this.x = x;
        this.y = y;
        this.height;
        this.width;
    }
    draw(context) {
    context.drawImage(
            this.image,
            this.x,
            this.y,
            this.height,
            this.width
    )
    }
    
    // jump = function() {
    //     this.classList.add('jump-animation');
    //     setTimeout(() => {
    //         this.classList.remove('jump-animation');
    //     }, 500);
    // }
}

let alien = new Alien(context, 0, 0, 85, 85)
alien.draw(context)
console.log(alien.classList)
// alien.draw(context);
        // document.addEventListener('keypress', () => {
        //     alien.jump();
        // })
        
        
        

        // )}

