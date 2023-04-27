class PlayerShip {
    dmg: number;
    hp: number;
    spd: number;
    frt: number;
    constructor(dmg: number, hp: number, spd: number, frt: number){
        this.dmg = dmg;
        this.hp = hp;
        this.spd = spd;
        this.frt = frt;
    }
}

const shipStats = {
    "striker": new PlayerShip(7,5,4,4),
    "falcon": new PlayerShip(5,4,7,4),
    "blitz": new PlayerShip(3,4,6,7),
    "juggernaut": new PlayerShip(6,7,4,3)
}
const strikerImg = img`
            ..55................
            .5669...............
            .54469..............
            5444469.............
            55544469............
            966544469...........
            9946544465...999....
            9944654445....aa9...
            9444465555.55577755.
            44444444445447888765
            44444444445447888765
            9444465555.55577755.
            9944654445....aa9...
            9966544465...999....
            965544469...........
            55444469............
            5444469.............
            .54469..............
            .5669...............
            ..55................
`

let player = sprites.create(strikerImg, SpriteKind.Player)

let spd = 3

while (true){
    if (controller.anyButton.isPressed()){
        const velocity = normalize(controller.dx(), controller.dy())//determines the direction of movement
        player.setPosition(Math.clamp(10, 150, player.x + velocity[0] * spd), Math.clamp(10, 110, player.y + velocity[1] * spd))
    }
    
    basic.pause(25)
}