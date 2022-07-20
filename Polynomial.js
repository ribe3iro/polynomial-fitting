// Lagrange interpolating polynomial

class Polynomial{
    constructor(){
        this.variables = [];
        this.coeff = [];
    }

    draw(){
        stroke(200, 0, 0);
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

    calculateCoeff(points){
        this.variables = [];
        this.coeff = points.map(p => p.y);

        let numPoints = points.length;
        for(let i = 0; i < numPoints; i++){
            this.variables.push(x => {
                let numerator = 1;
                let denominator = 1;
                for(let j = 0; j < numPoints; j++){
                    if(i != j){
                        numerator *= x - points[j].x;
                        denominator *= points[i].x - points[j].x;
                    }
                }
                return numerator/denominator;
            });
        }
    }
}