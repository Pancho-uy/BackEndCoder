class MiClase {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola soy ${this.nombre}`;
    }
}

// module.exports = MiClase
export default MiClase