const assert = require('assert')
const Calculadora = require("./calculadora");


function testSuma(){
    assert.equal(6, Calculadora.suma(4,2));
}

testSuma()


