const Helper = require("../Helper");
const expect = require("chai").expect;
const { it } = require("mocha");
const test = new Helper()

describe("Test Helper", function () {

    it("1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.", (done) => {
        try {
            expect(test.multiply(10, 20)).to.be.eq(200);
            expect(test.multiply(22, 50)).to.be.eq(1100);
            done();

        } catch (error) {
            done(error);
        }
    });
    it("2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.", (done) => {
        try {
            expect(test.numMayor([10, 20, 100, 5])).to.be.eq(100);
            expect(test.numMayor([10, 600, 500, 5])).to.be.eq(600);
            done();

        } catch (error) {
            done(error);
        }
    });
    it("3- Dado un arreglo, eliminar todos los undefined, null, false y 0 (no sus valores en string). Iterar solo 1 vez.", (done) => {
        try {
            expect(test.falsyFilter([null, 0, undefined])).deep.to.equal([]);
            expect(test.falsyFilter([10, "undefined", null, 5])).deep.to.equal([10, "undefined", 5]);
            done();

        } catch (error) {
            done(error);
        }
    });
    it("4- Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad", (done) => {
        try {
            expect(test.unnester([1, [2, [3, 4]], 'hola', [1, 'buenos dias']])).deep.to.equal([1, 2, 3, 4, 'hola', 1, 'buenos dias']);
            expect(test.unnester([1, [2, [3, [4]]], ['hola'], [1, 'buenos dias']])).deep.to.equal([1, 2, 3, 4, 'hola', 1, 'buenos dias']);
            done();

        } catch (error) {
            done(error);
        }
    });
    it("5- Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad", (done) => {
        try {
            expect(test.mostRepeatedWord("Este es un string, el cual es un string donde se repite muchas veces la palabra es")).deep.to.equal({ es: 3 });
            expect(test.mostRepeatedWord("Digo mucho la palabra mucho para que mucho se repita mucho")).deep.to.equal({ mucho: 4 });
            done();

        } catch (error) {
            done(error);
        }
    });
    it("6- Verificar si un string es un palíndromo.", (done) => {
        try {
            expect(test.isPalindrome("oso")).to.be.eq(true);
            expect(test.isPalindrome("tigre")).to.be.eq(false);
            done();

        } catch (error) {
            done(error);
        }
    });
    it("7- Dado 3 numeros, devolver el mayor. Hacer una function, adaptada de la anterior, para que funcione con cualquier cantidad de numeros.", (done) => {
        try {
            expect(test.getMayorNum(1,2,3,4)).to.be.eq(4);
            expect(test.getMayorNum(1,5,10)).to.be.eq(10);
            done();

        } catch (error) {
            done(error);
        }
    });
});