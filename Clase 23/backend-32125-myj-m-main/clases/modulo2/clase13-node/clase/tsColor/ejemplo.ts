const getColor = (): number => Math.floor(Math.random() * 255)

class Color {
    get(): string{
        return `rgb(${getColor()}, ${getColor()}, ${getColor()})`
    }
}
const color: Color = new Color()
console.log(color.get())