export default class Perimetro {
    
    // perímetro del cuadraro
    public cuadrado(lado: number): number {
        return lado * 4;
    }
    
    // perímetro del rectángulo
    public rectangulo(base: number, altura: number): number {
        return (base * 2) + (altura * 2);
    }
    
    //perímetro del circulo
    public circulo(radio: number): number {
        return Math.PI * (radio * radio);
    }
}   