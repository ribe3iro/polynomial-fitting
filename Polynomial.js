class Polynomial{
    constructor(){
        this.variables = [];
        this.coeff = [];
    }

    plot(){
        noFill()
        strokeWeight(3);
        beginShape();
        let x = -width/2;
        while(x < width/2){
            let y = 0;
            for(let i = 0; i < this.coeff.length; i++){
                y += this.coeff[i] * this.variables[i](x);
            }
            vertex(x, y);
            x += 0.25;
        }
        endShape();
    }
}