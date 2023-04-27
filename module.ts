function normalize(x: number, y: number) {
    if (x != 0 && y != 0) {
        const length = Math.sqrt(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2))//calculates the vector length using the pythagorean theorem
        x /= length
        y /= length
    }else{
        [x,y] = [Math.sign(x), Math.sign(y)]//this is here because this function returns a number from -1 to 1
    }
    return [x,y]
}