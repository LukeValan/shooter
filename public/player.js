let shots = []

class Player {
    constructor(x, y, s) {
        this.pos = createVector(x, y)
        this.s = s
        this.dir = 90
        this.aiml = 90
        this.charge = 1
        //players.push(this)
    }

    show() {
        push()
        fill('white')
        stroke('black')
        strokeWeight(2)
        ellipse(this.pos.x, this.pos.y, this.s, this.s)
        noFill()
        line(this.pos.x, this.pos.y, this.pos.x+this.aiml.x*(this.charge+10), this.pos.y+this.aiml.y*(this.charge+10))
        pop()
    }

    move() {
        if (keyIsDown(38)) {
            this.pos.y = this.pos.y - n(4)
        } else if (keyIsDown(40)) {
            this.pos.y = this.pos.y + n(4)
        }
        if (keyIsDown(39)) {
            this.pos.x = this.pos.x + n(4)
        } else if (keyIsDown(37)) {
            this.pos.x = this.pos.x - n(4)
        }
    }

    aim() {
        this.aiml = p5.Vector.fromAngle(radians(this.dir), n(10))
        if(keyIsDown(88)) {
            this.dir = this.dir + 1
        }else if(keyIsDown(90)) {
            this.dir = this.dir - 1
        }
        console.log(this.aiml)
        if(keyIsDown(32)) {
            if(this.charge < 10) {
                this.charge = this.charge + 0.1
            }
        }else {
            if(this.charge > 0) {
                this.fire(this.charge)
            }
        }
    }

    fire(charge) {
        shots.push(new shot(this.pos.x, this.pos.y, this.charge, this.dir))
        this.charge = -2
    }
}

class shot {
    constructor(x, y, charge, dir) {
        this.pos = createVector(x, y)
        this.speed = charge
        this.dir = dir
    }

    show() {
        this.aiml = p5.Vector.fromAngle(radians(this.dir), n((5+(this.speed))))
        this.pos.x = this.pos.x +this.aiml.x
        this.pos.y = this.pos.y +this.aiml.y
        push()
        fill('black') 
        stroke('black')
        strokeWeight(5)
        ellipse(this.pos.x, this.pos.y, n(10)) 

        pop()
    }

}