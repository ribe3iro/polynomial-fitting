class Interpolator extends Polynomial{
    plot(){
        if(points.length >= 2 && points.length <= INTERPOLATION_LIMIT){
            stroke(200, 0, 0);
            super.plot();
        }
    }

    calculateCoeff(points){
        if(points.length < 2 || points.length > INTERPOLATION_LIMIT){
            return;
        }
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