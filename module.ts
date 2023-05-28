function normalize(x: number, y: number) {
    if (x != 0 && y != 0) {
        const length = Math.sqrt(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2))
        x /= length
        y /= length
    }else{
        [x,y] = [Math.sign(x), Math.sign(y)]
    }
    return [x,y]
}