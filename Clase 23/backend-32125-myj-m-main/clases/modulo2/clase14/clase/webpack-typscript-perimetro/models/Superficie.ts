export default class Superficie {
    
    // superficie del cuadraro
    public cuadrado(lado: number): number {
        return lado * lado;
    }
    
    // superficie del rectángulo
    public rectangulo(base: number, altura: number): number {
        return base * altura;
    }

    //superficie del circulo
    public circulo(radio: number): number {
        return Math.PI * (radio * radio);
    }
    
}   