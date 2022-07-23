## Least Squares Method Polynomial
Basically, Least Squares Method Polynomial consists of the orthogonal projection of a continuous function into the polynomials space. By doing this, the resulting polynomial is the best polynomial aproximation for this continuous function. That means there is no other same degree polynomial that makes the squared area between itself and the original continuous function lesser!

In this example, things are a little bit different, cause there is no original continuous function to aproximate. Instead, we have points! Take a look at "discrete least squares approximation" for more information about this case.

## Lagrange Interpolating Polynomial
Polynomial interpolation means finding the lowest possible degree polynomial that necessarily passes through all the given points. One of the ways of finding it is by the Lagrange formulas below.

![image](https://user-images.githubusercontent.com/45838334/180057730-de88f359-22be-4b1a-b815-0b77bc66c242.png)
![image](https://user-images.githubusercontent.com/45838334/180057964-9aa80607-0830-4e2d-94d2-cc2bd6f38823.png)

(Images above by Prof. Afonso Paiva (ICMC-USP) - SME0306)

# Project
This is a P5.js visualization of both Lagrange Interpolating Polynomial and Least Squares Method Polynomial
![image](https://user-images.githubusercontent.com/45838334/180592514-6e592277-6221-492c-8a24-2d2d2d11e1e3.png)

Clicking on the canvas will add new points to the system, and force the polynomials to update itself for a better fit

You can also change the degree of the Least Squares Method Polynomial by editing the value of "LEAST_SQUARES_DEGREE" inside de code

# Installing
- Download the <a href='https://github.com/ribe3iro/polynomial-interpolation/archive/refs/heads/main.zip'>project here</a>
- Unpack the .zip file
- Open <b>index.html</b> using your browser
