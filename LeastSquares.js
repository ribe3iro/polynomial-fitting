class LeastSquares extends Polynomial{
    plot(){
        if(points.length > 0){
            stroke(0, 100, 200);
            super.plot();
        }
    }

    calculateCoeff(points){
        if(points.length <= 0){
            return;
        }
        let X = points.map(p => p.x);
        let Y = points.map(p => p.y);
        let pointsCount = points.length;

        this.variables = [];
        for(let i = 0; i < LEAST_SQUARES_DEGREE+1; i++){
            this.variables.push(x => x**i);
        }

        let bases = [];
        for(let i = 0; i < LEAST_SQUARES_DEGREE+1; i++){
            bases.push([]);
            for(let j = 0; j < pointsCount; j++){
                bases[i].push(X[j] ** i);
            }
        }


        let coefficientsMatrix = [];
        for(let i = 0; i < LEAST_SQUARES_DEGREE+1; i++){
            let line = [];
            for(let j = 0; j < LEAST_SQUARES_DEGREE+1; j++){
                let sum = 0;
                for(let k = 0; k < pointsCount; k++){
                    sum += bases[i][k] * bases[j][k];
                }
                line.push(sum);
            }
            coefficientsMatrix.push(line);
        }

        let constantsArray = [];
        for(let i = 0; i < LEAST_SQUARES_DEGREE+1; i++){
            let sum = 0;
            for(let k = 0; k < pointsCount; k++){
                sum += Y[k] * bases[i][k];
            }

            constantsArray.push(sum)
        }

        let coefficientsMatrixCopy = JSON.parse(JSON.stringify(coefficientsMatrix));
        let constantsArrayCopy = JSON.parse(JSON.stringify(constantsArray));

        this.coeff = solveSystem(coefficientsMatrixCopy, constantsArrayCopy);
    }
}