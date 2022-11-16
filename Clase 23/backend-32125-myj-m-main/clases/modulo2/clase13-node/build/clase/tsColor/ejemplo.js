"use strict";
const getColor = () => Math.floor(Math.random() * 255);
class Color {
    get() {
        return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    }
}
const color = new Color();
console.log(color.get());
