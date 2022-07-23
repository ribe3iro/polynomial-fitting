let points = [];
let interpolation;
let least_squares;

const INTERPOLATION = 1;
const LEAST_SQUARES = 2;

const INTERPOLATION_LIMIT = 20;

const LEAST_SQUARES_DEGREE = 2;

function setup(){
	createCanvas(1500, 800);
	interpolation = new Interpolator();
	least_squares = new LeastSquares();
}

function draw(){
	translate(width/2, height/2);
	background(0);

	// axis
	strokeWeight(1);
	stroke(255, 255, 255, 100);
	line(0, -height/2, 0, height/2);
	line(-width/2, 0, width/2, 0);

	// polynomials
	interpolation.plot();
	least_squares.plot();

	// points
	stroke(0, 255, 0, 150);
	strokeWeight(10);
	points.forEach(p => {
		point(p.x, p.y);
	});
}

function mousePressed(){
	points.push({
		x: mouseX - width/2,
		y: mouseY - height/2
	});

	let pointsCopy = JSON.parse(JSON.stringify(points));
	interpolation.calculateCoeff(pointsCopy);
	least_squares.calculateCoeff(pointsCopy);
}

function solveSystem(coefficientsMatrix, constantsArray){
	let extendedMatrix = coefficientsMatrix;

	for(let i = 0; i < extendedMatrix.length; i++){
		extendedMatrix[i].push(constantsArray[i]);
	}

	for(let i = 0; i < extendedMatrix.length-1; i++){

		let currentCol = extendedMatrix.map(elem => elem[i]);
		let record = Math.abs(currentCol[i]);
		let record_index = i;
		for(let m = i+1; m < extendedMatrix.length; m++){
			let currentValue = Math.abs(currentCol[m]);
			if(currentValue > record){
				record = currentValue;
				record_index = m;
			}
		}

		if(record_index != i){
			let temp = extendedMatrix[i];
			extendedMatrix[i] = extendedMatrix[record_index];
			extendedMatrix[record_index] = temp;
		}


		for(let j = i+1; j < extendedMatrix.length; j++){
			let multiplier = extendedMatrix[j][i]/extendedMatrix[i][i];
			for(let k = i; k <= extendedMatrix.length; k++){
				extendedMatrix[j][k] -= (extendedMatrix[i][k])*multiplier;
			}
		}
	}

	let variablesMatrix = Array(extendedMatrix.length);

	for(let i = extendedMatrix.length-1; i >= 0; i--){
		variablesMatrix[i] = extendedMatrix[i][extendedMatrix.length]

		for(let j = i+1; j < extendedMatrix.length; j++){
			variablesMatrix[i] -= extendedMatrix[i][j]*variablesMatrix[j];
		}

		variablesMatrix[i] /= extendedMatrix[i][i];
	}

	return variablesMatrix;
}
 