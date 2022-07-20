let points = [];
let polynomial;

function setup(){
	createCanvas(1500, 800);
	polynomial = new Polynomial();
}

function draw(){
	translate(width/2, height/2);
	background(0);

	// axis
	strokeWeight(1);
	stroke(255);
	line(0, -height/2, 0, height/2);
	line(-width/2, 0, width/2, 0);

	// polynomial
	if(polynomial.coeff.length >= 2){
		polynomial.draw();
	}

	// points
	stroke(0, 255, 0);
	strokeWeight(10);
	points.forEach(p => {
		point(p.x, p.y);
		// noise
		// p.x += random(-3, 3);
		// p.y += random(-3, 3);
	});

	let pointsCopy = JSON.parse(JSON.stringify(points))
	polynomial.calculateCoeff(pointsCopy);
}

function mousePressed(){
	points.push({
		x: mouseX - width/2,
		y: mouseY - height/2
	});
}
 