namespace SpriteKind {
    export const thang = SpriteKind.create()
    export const Cookie = SpriteKind.create()
}
controller.combos.attachCombo("u+dalrb", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        ................22222222.....................................
        ...............22222222222...................................
        ...............222222222222..................................
        ...............2222222222222.................................
        ...............222222222222222...............................
        ...............2222222222222222..............................
        ................222222222222222..............................
        ................2222222222222222.............................
        ................2222222222222222.............................
        .................2222222222222225555555555...................
        .................2222222222222225555555555555................
        .................222222222222222555555555555555..............
        .................2222222222222255555555555555555.............
        ..................22222222225555555555555555555555...........
        ..22222..........2882222555555555555555555555555555..........
        2222222222......228825555555555555555555555555555555.........
        222222222222222.8822255555555555555555555555555555555........
        2222222222222222882225555555555f5555555555555555555555.......
        22222222222222222252555555555f5f55555555555555555555555......
        22222222222222222255555555555f55f55555555555555555555555.....
        .222222222222222225555555555f5f8888855555555555555555555.....
        .222222222222222225555555555f5888811855555555555555555555....
        ..222222222222222225555555555f8888118555555555555555555555...
        ...2222222222222222555555555558888888555555555555555555555...
        ....2222222222222225555555555588888885555555555555222252225..
        ......22222222222255555555555588888885555555555552222222222..
        ......22222222222255555555555588888885555555555552222222222..
        ........22222222255555555555555888885555555555555............
        .........2222225555555555555555555555555555555555............
        .........5525555555555555555555555555555555555555............
        .........5555555555555555555555555555555.....................
        .........5555555555555555555555555555555.....................
        .........555555555555555555555555............................
        .........555555555555555555555...............................
        .........555555555555555555..................................
        .........555555555555555555555...............................
        .........555555555555555555555555............................
        .........555555555555555f555555555555555.....................
        .........55555555555555fff55555555555555.....................
        .........555555555555555f555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        ..........5555555555555555555555555555555555555552222222222..
        ..........5555555555555555555555555555555555555552222222222..
        ..........5555555555555555555555555555555555555555555555555..
        ...........55555555555555555555555555555555555555555555555...
        ...........55555555555555555555555555555555555555555555555...
        ............555555555555555555555555555555555555555555555....
        .............5555555555555555555555555555555555555555555.....
        .............5555555555555555555555555555555555555555555.....
        ..............55555555555555555555555555555555555555555......
        ...............555555555555555555555555555555555555555.......
        ................5555555555555555555555555555555555555........
        .................55555555555555555555555555555555555.........
        ..................555555555555555555555555555555555..........
        ...................5555555555555555555555555555555...........
        .....................555555555555555555555555555.............
        ......................5555555555555555555555555..............
        ........................555555555555555555555................
        ...........................555555555555555...................
        .............................................................
        `,img`
        ................22222222.....................................
        ...............22222222222...................................
        ...............222222222222..................................
        ...............2222222222222.................................
        ...............222222222222222...............................
        ...............2222222222222222..............................
        ................222222222222222..............................
        ................2222222222222222.............................
        ................2222222222222222.............................
        .................2222222222222225555555555...................
        .................2222222222222225555555555555................
        .................222222222222222555555555555555..............
        .................2222222222222255555555555555555.............
        ..................22222222225555555555555555555555...........
        ..22222..........2882222555555555555555555555555555..........
        2222222222......228825555555555555555555555555555555.........
        222222222222222.8822255555555555555555555555555555555........
        222222222222222288222555555555555555555555555555555555.......
        2222222222222222225255555555555555555555555555555555555......
        22222222222222222255555555555555555555555555555555555555.....
        .2222222222222222255555555555555555555f55555555555555555.....
        .22222222222222222555555555555555555f5f555555555555555555....
        ..2222222222222222255555555555555555f55f555555555555555555...
        ...22222222222222225555555555555555f5f88888555555555555555...
        ....2222222222222225555555555555555f58888118555555555555555..
        ......222222222222555555555555555555f8888118555555555555555..
        ......22222222222255555555555555555558888888555555555555555..
        ........2222222225555555555555555555588888885555555555555555.
        .........222222555555555555555555555588888885555555555555555.
        .........552555555555555555555555555588888885555555555555555.
        .........555555555555555555555555555558888855555555555555555.
        .........555555555555555555555555555555555555555555555555555.
        .........555555555555555555555555555555555555555555222252225.
        .........555555555555555555555555555555555555555552222222222.
        .........555555555555555555555555555555555555555552222222222.
        .........555555555555555555555555555555555555555552222222222.
        .........555555555555555555555555555555555555555555222222225.
        .........555555555555555555555555555555555555555555555555555.
        .........555555555555555555555555555555555555555555555555555.
        .........555555555555555555555555555555555555555555555555555.
        .........555555555555555555555555555555555555555555555555555.
        .........5555555555555555555555f5555555555555555555555555555.
        ..........55555555555555555555fff55555555555555555555555555..
        ..........555555555555555555555f555555555555555555555555555..
        ..........5555555555555555555555555555555555555555555555555..
        ...........55555555555555555555555555555555555555555555555...
        ...........55555555555555555555555555555555555555555555555...
        ............555555555555555555555555555555555555555555555....
        .............5555555555555555555555555555555555555555555.....
        .............5555555555555555555555555555555555555555555.....
        ..............55555555555555555555555555555555555555555......
        ...............555555555555555555555555555555555555555.......
        ................5555555555555555555555555555555555555........
        .................55555555555555555555555555555555555.........
        ..................555555555555555555555555555555555..........
        ...................5555555555555555555555555555555...........
        .....................555555555555555555555555555.............
        ......................5555555555555555555555555..............
        ........................555555555555555555555................
        ...........................555555555555555...................
        .............................................................
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff222222222222222222222fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff22222222222222222222222222222222ff
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffff2f
        f2ffffffffffffffffffffff222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        ff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff22222222222111111111111111111222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff333f333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff3333333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff33333ffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff333fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff3ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffff222222222fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        ff222222222ffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffff22222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff22222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        ff22222222222222222222222222222fffffffffff222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.startCountdown(10)
    info.changeScoreBy(100)
    info.changeLifeBy(100)
})
info.onScore(-7, function () {
    game.gameOver(false)
})
info.onScore(-5, function () {
    game.gameOver(false)
})
controller.combos.attachCombo("u+dl+ra+b", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        ................22222222.....................................
        ...............22222222222...................................
        ...............222222222222..................................
        ...............2222222222222.................................
        ...............222222222222222...............................
        ...............2222222222222222..............................
        ................222222222222222..............................
        ................2222222222222222.............................
        ................2222222222222222.............................
        .................2222222222222222222222222...................
        .................2222222222222222222222222222................
        .................222222222222222222222222222222..............
        .................2222222222222222222222222222222.............
        ..................22222222222222222222222222222222...........
        ..22222..........2222222222222222222222222222222222..........
        2222222222......222222222222222222222222222222222222.........
        222222222222222.2222222222222222222222222222222222222........
        222222222222222222222222222222222222222222222222222222.......
        2222222222222222222222222222222222222222222222222222222......
        22222222222222222222222222222222222222222222222222222222.....
        .2222222222222222222222222222222222222222222222222222222.....
        .22222222222222222222222222222222222222222222222222222222....
        ..22222222222222222222222222222222222222222222222222222222...
        ...2222222222222222222222222222222222222222222222222222222...
        ....2222222222222222222222222222222222222222222222222222222..
        ......22222222222222222222222222222222222222222222222222222..
        ......22222222222222222222222222222222222222222222222222222..
        ........22222222222222222222222222222222222222222............
        .........4444444444444444444444444444444444444444............
        .........4444444444444444444444444444444444444444............
        .........4444444444444444444444444444444.....................
        .........4444444444444444444444444444444.....................
        .........444444444444444444444444............................
        .........444444444444444444444...............................
        .........444444444444444444..................................
        .........444444444444444444444...............................
        .........444444444444444444444444............................
        .........4444444444444444444444444444444.....................
        .........4444444444444444444444444444444.....................
        .........4444444444444444444444444444444444444444............
        .........4444444444444444444444444444444444444444............
        .........4444444444444444444444444444444444444444............
        ..........4444444444444444444444444444444444444444444444444..
        ..........4444444444444444444444444444444444444444444444444..
        ..........5555555555555555555555555555555555555555555555555..
        ...........55555555555555555555555555555555555555555555555...
        ...........55555555555555555555555555555555555555555555555...
        ............555555555555555555555555555555555555555555555....
        .............5555555555555555555555555555555555555555555.....
        .............5555555555555555555555555555555555555555555.....
        ..............55555555555555555555555555555555555555555......
        ...............555555555555555555555555555555555555555.......
        ................5555555555555555555555555555555555555........
        .................55555555555555555555555555555555555.........
        ..................555555555555555555555555555555555..........
        ...................5555555555555555555555555555555...........
        .....................555555555555555555555555555.............
        ......................5555555555555555555555555..............
        ........................555555555555555555555................
        ...........................555555555555555...................
        .............................................................
        `,img`
        ................77777777.....................................
        ...............77777777777...................................
        ...............777777777777..................................
        ...............7777777777777.................................
        ...............777777777777777...............................
        ...............7777777777777777..............................
        ................777777777777777..............................
        ................7777777777777777.............................
        ................7777777777777777.............................
        .................7777777777777777777777777...................
        .................7777777777777777777777777777................
        .................777777777777777777777777777777..............
        .................7777777777777777777777777777777.............
        ..................77777777777777777777777777777777...........
        ..77777..........7777777777777777777777777777777777..........
        7777777777......777777777777777777777777777777777777.........
        777777777777777.7777777777777777777777777777777777777........
        777777777777777777777777777777777777777777777777777777.......
        7777777777777777777777777777777777777777777777777777777......
        77777777777777777777777777777777777777777777777777777777.....
        .7777777777777777777777777777777777777777777777777777777.....
        .77777777777777777777777777777777777777777777777777777777....
        ..77777777777777777777777777777777777777777777777777777777...
        ...7777777777777777777777777777777777777777777777777777777...
        ....7777777777777777777777777777777777777777777777777777777..
        ......77777777777777777777777777777777777777777777777777777..
        ......77777777777777777777777777777777777777777777777777777..
        ........7777777777777777777777777777777777777777777777777777.
        .........777777777777777777777777777777777777777777777777777.
        .........777777777777777777777777777777777777777777777777777.
        .........777777777777777777777777777777777777777777777777777.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        .........999999999999999999999999999999999999999999999999999.
        ..........9999999999999999999999999999999999999999999999999..
        ..........9999999999999999999999999999999999999999999999999..
        ..........9999999999999999999999999999999999999999999999999..
        ...........99999999999999999999999999999999999999999999999...
        ...........99999999999999999999999999999999999999999999999...
        ............999999999999999999999999999999999999999999999....
        .............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.....
        .............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.....
        ..............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa......
        ...............aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.......
        ................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa........
        .................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.........
        ..................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..........
        ...................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...........
        .....................aaaaaaaaaaaaaaaaaaaaaaaaaaa.............
        ......................aaaaaaaaaaaaaaaaaaaaaaaaa..............
        ........................aaaaaaaaaaaaaaaaaaaaa................
        ...........................aaaaaaaaaaaaaaa...................
        .............................................................
        `],
    100,
    true
    )
    for (let index = 0; index < 100; index++) {
        info.changeLifeBy(99)
        info.changeScoreBy(99)
    }
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff222222222222222222222fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff22222222222222222222222222222222ff
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffff2f
        f2ffffffffffffffffffffff222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        ff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff22222222222111111111111111111222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff3fff3ffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff333f333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff3333333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff33333ffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff333fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff3ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffff222222222fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        ff222222222ffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffff22222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff22222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        ff22222222222222222222222222222fffffffffff222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.startCountdown(10)
})
info.onScore(-10, function () {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 1 1 . 
        1 1 1 1 
        1 1 1 1 
        . 1 1 . 
        `, PacMan, 200, 0)
})
controller.combos.attachCombo("u+d+l+r", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . 5 5 5 5 5 . . . . 
        . . 5 5 5 2 5 5 5 5 5 . . 
        . 5 5 5 5 2 2 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 1 . 1 . 
        5 5 5 5 5 5 . 1 . 1 . 1 . 
        5 5 5 5 1 . 1 . 1 . . . . 
        5 5 5 5 5 5 1 . 1 . 1 . . 
        5 5 5 5 5 5 5 5 5 . 1 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . 
        . . 5 5 5 2 5 5 5 5 5 . . 
        . 5 5 5 5 2 2 5 5 5 5 5 . 
        . 5 5 5 5 5 5 1 5 1 5 1 . 
        5 5 5 5 5 5 5 1 5 1 5 1 5 
        5 5 5 5 5 5 5 1 5 1 5 1 5 
        5 5 5 5 5 5 5 5 1 5 1 5 1 
        5 5 5 5 5 5 5 5 1 5 1 5 1 
        5 5 5 5 5 5 5 5 1 5 1 5 1 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        feeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffefffffffffffeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        feeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeef
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeee111111111111111111eeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffff2ffffffffffffffffffff22fffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeffffffff222ffff22fffffffffff22222ffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffff22222222222fffffff22222222222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffef22ffff2222222222222ffff222222222222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffef222ff22222222222222fff2222224422222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeff222f22222222222222ff22222224422222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeff2222222242222222222222244244422222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeff22222422442222222222224442444422222ffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffeff22222444444222222222244444444422222ffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefff2222444444444422244444444444442222ffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefff2222244444444444444444444444422222ffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefff2222244444444444444444444444222222ffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fffffffffffefffffffffffffffffffeeeeeeeeeeeffffffffffffffffeffff22224444444554444445544444222222fffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        feeeeeeeeeeefffffffffffffffffffefffffffffeffffffffffffffffefffff222244454455545555554444222222ffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffefffff22224445555555555555444222222fffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffefffff2222244455555555555544422222ffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffefffffff22224445555555555444422222ffffffffefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffefffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffef
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        fefffffffffffffffffffffffffffffefffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffff
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
})
info.onScore(-6, function () {
    game.gameOver(false)
})
controller.combos.attachCombo("uuddabab", function () {
    info.startCountdown(10)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    scene.cameraShake(4, 3000)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        9 9 9 9 9 9 9 9 9 9 9 . . . . . 
        . a a a a a a a . . . . . . . . 
        e e e e e e . . . . . . . . . . 
        . 2 2 2 2 2 2 2 . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
        a a a a a a a a a a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        a a a a a a a a a a a a a a a . 
        . e e e e e e e e e e e e e e . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . a a a a a a a a a a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    controller.moveSprite(PacMan, 400, 400)
    info.changeScoreBy(999)
    info.changeLifeBy(999)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f88888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8888888888881111111111111111118888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8fffffffffffffffffff88888888888ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f88888888888fffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
})
info.onCountdownEnd(function () {
    controller.moveSprite(PacMan, 200, 200)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 . . . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f88888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8888888888881111111111111111118888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8fffffffffffffffffff88888888888ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f88888888888fffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.coolRadial, 100)
    info.changeScoreBy(-10)
    info.changeLifeBy(1)
})
info.onScore(-2, function () {
    game.gameOver(false)
})
controller.combos.attachCombo("udalrlr", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . e 2 4 5 7 9 a . 
        f f f f f f f f f 
        5 5 5 5 5 5 5 5 5 
        5 f 1 5 5 5 5 5 5 
        5 9 f 2 2 . . . . 
        5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 . 
        `,img`
        . e 2 4 5 7 9 a . 
        f f f f f f f f f 
        5 5 5 5 5 5 5 5 5 
        5 5 f 1 5 5 5 5 5 
        5 5 9 f 5 5 5 5 5 
        5 5 5 5 2 2 5 5 5 
        5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 . 
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5ff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff5ffff5fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffff55ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff5fffff5ffffffffffffff5f5ffffffffffffffffffffffffff555555ff55555fffffffffffffffffffffffffffffffff5ffffffff555fffffffffffffffffffffffffffffffff
        ffffffffffffffffff5ffffff5ffffffffffffff5ff5ffffffffffffffffff5555555ffffff55fffff55555ffffffffffffffffffffffffffff5fffffffffff5ffffffffffffffffffffffffffffffff
        ffffffffffffffffff5ffffff5fffffffffffffffff55ffffffffffffffff5fffffffffffffffffffffffff5fffffffffffffffffffffffffff5ffffffffffff5fffffffffffffffffffffffffffffff
        fffffffffffffffff5ffffff5fffffffffffffff5ffff55555fffffff5555ffffffffffffffffffffffffff5fffffffffffffffffffffffffff5fffffffffffff55fffffffffffffffffffffffffffff
        fffffffffffffff55fffffff5fffffffffffffff5fffffffff5555555fffffffffffffffffffffffffffffff5fffffffffffffffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffff
        fffffffffffffff5ffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffff
        ffffffffffffff5fffffffff5fffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffffff
        ffffffffffffff5ffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffff
        fffffffffffff5fffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffff
        fffffffffffff5fffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffffff
        ffffffffffff5ffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffff
        ffffffffffff5ffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffff5ffffffffffffffffffffffffff
        fffffffffff5fffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffffffffffff
        fffffffffff5fffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffffffffffff
        ffffffffff5ffffffffffff5fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5ffffffffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5ffffffffffff5fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5ffffffffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff5fffffffffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffff5ffffffffffffffffffffffff
        ffffffffff5fffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff5fffffffffffffffffffffffffff5ffffffffffffffffffffffff
        fffffffff5ffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffff5ffffffffffffffffffffffffffff5ffffffffffffffffffffffff
        ffffffff5fffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff5ffffffffffffffffffffffffffff5ffffffffffffffffffffffff
        ffffffff5fffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff5fffffffffffffffffffffffffffff5ffffffffffffffffffffffff
        ffffffff5fffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff5fffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        ffffffff5fffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffff1fffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        ffffffff5fffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffff1ffff1ff11ffffffffffff5ffffffffff5fffffffffffffffffffffffffffffff55fffffffffffffffffffffff
        ffffffff5fffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffff1ff1111111f11ff1fffffff5ffffffff5ffffffffffffffffffffffffffffffff55fffffffffffffffffffffff
        ffffffff5ffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffff1ff111111f51151155ffffff5fffff55ffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffff11f1f111115f11f11ff55ffff5ffff5fffffffffffffffffffffffffffffffffff55fffffffffffffffffffffff
        fffffff5fffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffff111f1111f1f1f11f1ffff5fff5ff55ffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffff
        fffffff5fffffffffffff5ffffffffffffffff5fffffff55555ffffffffffffffffff111f11f111f1f111ffffff5fff55fffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5ffffffffffffffff5ffffff5fffff5fffffffffffffffff1f11111111f1f1f1ffffff5ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5fffffffffffffffff5ffff5ffffff55ffffffffffffffff1111f11f111ff1f1fffffff5fffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5fffffffffffffffff5f555ffffffff5ffffffffffffffff1111f1fff1ff11f1fffffff5fffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5fffffffffffffffff555fffffffffff5ffffffffffffff1111f11fff1ff1ff1ffffff5ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
        fffffff5fffffffffffff5fffffffffffffffffffffffffffffff5fffffffffffff5115111fffffff1f11ffffff5fffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff
        fffffff5fffffffffffff5fffffffffffffffffffffffffffffff5ffffffffffff5f11ff1ffffffffff11ffffff5fffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffff
        fffffff5ffffffffffffff5ffffffffffffffffffffffffffffff5ffffffffffff5511fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff
        fffffff5ffffffffffffff5ffffffffffffffffffffffffffffff5ffffffffffff511fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffff
        fffffff5ffffffffffffff5fffffffffffffffffffffffffffff55fffffffffff551ffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffff
        fffffff5ffffffffffffff5fffffffffffffffffffffffffffff5ffffffffffff55fffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff
        fffffff5ffffffffffffff55fffffffffffffffffffffffffff5fffffffffffff5555ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffff
        fffffff5ffffffffffffffff55ffffffffffffffffffffffff5ffffffffffffff55ffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffff
        fffffff5ffffffffffffffffff55ffffffffffffffffffff55fffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffff
        fffffff55fffffffffffffffffff55ffffffffffffff5555fffffffffffffffff5ffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffff
        fffffffff5ffffffffffffffffffff55555555555555fffffffffffffffffffff5fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        ffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        ffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffff
        fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffff
        fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff5fffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffff
        ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff5fffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffff
        ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff55fffffffffff5555555555ffffffffffffffffffffffffffffff5fffffffffffffffffffffffffff
        ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff55ffffff5fffffffff5555ffffffffff55555555555ffffffffffffffffffff5ffffffffffffffffffffffffff
        fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff55ff55fffffffff5fffffffffffffffffffffffff5fffffffffffffffffff5ffffffffffffffffffffffffff
        fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffff55ffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffff
        fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        fffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffffff5555ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffffff5fff5ffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffffff5ffff5ffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffffff5ffff5ffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffffff5fffff5ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffff5ffffff5ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffff5ffffff5ffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff5fffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffff5fffffff5fffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffff5fffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffffff5fffffff5ffffffffffffffffffffffff5ffffffffff55ffffffffffffffffffffffffffffffffffffff5fffffffffffff5ffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5ffffffff5ffffffffffffffffffffffff5fffffff555ff555fffffffffffffffffffffffffffffffffff55ffffffffff55fffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5ffffffff5ffffffffffffffffffffffff5ffffff5ffffffff5ffffffffffffffffffffffffffffffffffff55ffffffff5ffffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5ffffffff5fffffffffffffffffffffffff555555ffffffffff5ffffffffffffffffffffffffffffffffffff5fffff555fffffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5ffffffff5fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5fffffffff5fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5fffffffff5fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffff5fffffffff5fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5ff5ffffffffffffffffff5fffffffff5fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5f5fffffffffffffffffff5fffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff55ffffffffffffffffffff5fffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5ffffffffffffffffffff5fffffffffff5fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff55fffffffffffffffffff5fffffffffff5ffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff55fffffffffffffffffff5fffffffffff5ffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff55fffffffffffffffffff5fffffffffff5fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff55ffffffffffffffffff5ffffffffffff5ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff5f5fffffffffffffffff5ffffffffffff5ffffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff55fffffffffffffffff5ffffffffffff5ffffffffffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff5f5fffffffffffffff5fffffffffffff5fffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff5fffffffffffffff5fffffffffffffff5ffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff5fffffffffffff5ffffffffffffffff5fffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff5ffffffffffff5fffffffffffffffff5fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff5fffffffffff5fffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff55ffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff55ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff55ff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.changeScoreBy(11)
    info.changeLifeBy(11)
})
info.onScore(-1, function () {
    game.gameOver(false)
})
controller.combos.attachCombo("uuddlrlr", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . 2 2 2 5 5 5 5 . . . . . 
        . . . 2 8 2 2 5 5 5 5 5 5 . . . 
        . 2 2 8 2 5 5 5 5 5 5 5 5 5 . . 
        . 2 2 2 5 5 5 f f 5 5 5 2 2 . . 
        . . 2 2 5 5 f 8 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 . . . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 f 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 2 2 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . 2 2 2 5 5 5 5 . . . . . 
        . . . 2 8 2 2 5 5 5 5 5 5 . . . 
        . 2 2 8 2 5 5 5 5 5 5 5 5 5 . . 
        . 2 2 2 5 5 5 5 5 5 f f 5 5 . . 
        . . 2 2 5 5 5 5 5 f 8 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 2 2 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 f 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff222222222222222222222fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff22222222222222222222222222222222ff
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffff2ffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffff2ffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffff2f
        f2ffffffffffffffffffffff222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        ff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2fffffffffffffffffffffffffffffffffffffffffffffff22222222222111111111111111111222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff333f333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff333333333ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff3333333fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff33333ffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffff333fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff3ffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        fffffffffff2ffffffffffffffffffff222222222fffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        ff222222222ffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffff22222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2ffffffffffffffff22222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        f2fffffffffffffffffffffffffffff2fffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffff
        ff22222222222222222222222222222fffffffffff222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.changeLifeBy(3)
    info.changeScoreBy(1982)
})
info.onScore(-4, function () {
    game.gameOver(false)
})
controller.combos.attachCombo("udlr", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        .............................................................
        .............................................................
        ...........................555555555555555...................
        ........................555555555555555555555................
        ......................5555555555555555555555555..............
        .....................555555555555555555555555555.............
        ...................5555555555555555555555555555555...........
        ..................555555555555555555555555555555555..........
        .................55555555555555555555555555555555555.........
        ................5555555555555555555555555555555555555........
        ...............555555555555555555555555555555555555555.......
        ..............55555555555555555555555555555555555555555......
        .............5555555555555555555555555555555555555555555.....
        .............5555555555555555555555555555555555555555555.....
        ............555555555555555555555555555555555555555555555....
        ...........55555555555555555555555555555555555555555555555...
        ...........55555555555555555555555555555555555555555555555...
        ..........5555555555555555555555555555555555555555555555555..
        ..........5555555555555555555555555555555555555555555555555..
        ..........5555555555555555555555555555555555555555555555555..
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555.....................
        .........5555555555555555555555555555555.....................
        .........555555555555555555555555............................
        .........555555555555555555555...............................
        .........555555555555555555..................................
        .........555555555555555555555...............................
        .........555555555555555555555555............................
        .........5555555555555555555555555555555.....................
        .........5555555555555555555555555555555.....................
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        .........5555555555555555555555555555555555555555............
        ..........5555555555555555555555555555555555555555555555555..
        ..........5555555555555555555555555555555555555555555555555..
        ..........5555555555555555555555555555555555555555555555555..
        ...........55555555555555555555555555555555555555555555555...
        ...........55555555555555555555555555555555555555555555555...
        ............555555555555555555555555555555555555555555555....
        .............5555555555555555555555555555555555555555555.....
        .............5555555555555555555555555555555555555555555.....
        ..............55555555555555555555555555555555555555555......
        ...............555555555555555555555555555555555555555.......
        ................5555555555555555555555555555555555555........
        .................55555555555555555555555555555555555.........
        ..................555555555555555555555555555555555..........
        ...................5555555555555555555555555555555...........
        .....................555555555555555555555555555.............
        ......................5555555555555555555555555..............
        ........................555555555555555555555................
        ...........................555555555555555...................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        `,img`
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        .............................................................
        ....................555555555555555..........................
        .................555555555555555555555.......................
        ...............5555555555555555555555555.....................
        ..............555555555555555555555555555....................
        ............5555555555555555555555555555555..................
        ...........555555555555555555555555555555555.................
        ..........55555555555555555555555555555555555................
        .........5555555555555555555555555555555555555...............
        ........555555555555555555555555555555555555555..............
        .......55555555555555555555555555555555555555555.............
        ......5555555555555555555555555555555555555555555............
        ......5555555555555555555555555555555555555555555............
        .....555555555555555555555555555555555555555555555...........
        ....55555555555555555555555555555555555555555555555..........
        ....55555555555555555555555555555555555555555555555..........
        ...5555555555555555555555555555555555555555555555555.........
        ...5555555555555555555555555555555555555555555555555.........
        ...5555555555555555555555555555555555555555555555555.........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ..555555555555555555555555555555555555555555555555555........
        ...5555555555555555555555555555555555555555555555555.........
        ...5555555555555555555555555555555555555555555555555.........
        ...5555555555555555555555555555555555555555555555555.........
        ....55555555555555555555555555555555555555555555555..........
        ....55555555555555555555555555555555555555555555555..........
        .....555555555555555555555555555555555555555555555...........
        ......5555555555555555555555555555555555555555555............
        ......5555555555555555555555555555555555555555555............
        .......55555555555555555555555555555555555555555.............
        ........555555555555555555555555555555555555555..............
        .........5555555555555555555555555555555555555...............
        ..........55555555555555555555555555555555555................
        ...........555555555555555555555555555555555.................
        ............5555555555555555555555555555555..................
        ..............555555555555555555555555555....................
        ...............5555555555555555555555555.....................
        .................555555555555555555555.......................
        ....................555555555555555..........................
        .............................................................
        .............................................................
        `],
    100,
    true
    )
    info.changeScoreBy(50)
    info.changeLifeBy(50)
    scene.cameraShake(7, 100000)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f88888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8888888888881111111111111111118888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8fffffffffffffffffff88888888888ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f88888888888fffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.startCountdown(10)
    controller.moveSprite(mySprite, 50, 50)
})
controller.combos.attachCombo("udl+r", function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . 
        . . 2 2 . . . 2 2 . . 
        . . 2 2 2 . 2 2 2 . . 
        . . 2 2 2 2 2 2 2 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 f 1 5 5 5 
        5 5 5 5 5 5 9 f 5 5 5 
        5 5 5 5 2 2 5 5 . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `,img`
        . . . . . . . . . . . 
        . . 2 2 . . . 2 2 . . 
        . . 2 2 2 . 2 2 2 . . 
        . . 2 2 2 2 2 2 2 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 f 1 5 5 5 
        5 5 5 5 5 5 9 f 5 5 5 
        5 5 5 5 2 2 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `],
    100,
    true
    )
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333333333333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff333333fffffffffffffffffffffffffffffffffffffffffff3333333333333333333333333333fffff3333fffffffffffffffffffffffffffffffffffff333ffffffffffffffffffffffffff
        ffffffff33333333fffffffffffffffffffffffffffffffff3333333333333333333333333333fffffffffffff3333fffffffffffffffffffffffffffffffffff333333fffffffffffffffffffffffff
        ffffffff3333333333ffffffffffffffffffffff3333333333333333333333333333fffffffffffffffffffffff333ffffffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffff
        ffffffff333f33333333fffffffffffffff333333333333333333333333ffffffffffffffffffffffffffffffff333fffffffffffffffffffffffffffffffff33333333fffffffffffffffffffffffff
        ffffffff333fff33333333fffffffffffff3333333333333333ffffffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffffffffff333333f333fffffffffffffffffffffffff
        ffffffff333fffff333333333ffffffffff3333333fffffffffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffffffff333333ff333fffffffffffffffffffffffff
        ffffffff333fffffff333333333ffffffffff333333fffffffffffffffffffffffffffffffffffffffffffffffff333ffffffffffffffffffffffffffff333333fff333fffffffffffffffffffffffff
        ffffffff333fffffffff333333333fffffffff333333ffffffffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffff333333fffff333fffffffffffffffffffffffff
        ffffffff333ffffffffffff33333333fffffffff333333ffffffffffffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffff333333ffffff333fffffffffffffffffffffffff
        ffffffff333ffffffffffffff33333333ffffffff333333ffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff333333fffffff333fffffffffffffffffffffffff
        ffffffff333ffffffffffffffff333333333ffffff333333fffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffff333333fffffffff333fffffffffffffffffffffffff
        ffffffff333ffffffffffffffffff333333333ffffff33333ffffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffff333333ffffffffff333fffffffffffffffffffffffff
        ffffffff3333fffffffffffffffffff333333333fffff333333ffffffffffffffffffffffffffffffffffffffffff3333ffffffffffffffffff333333fffffffffff333fffffffffffffffffffffffff
        ffffffff3333ffffffffffffffffffffff33333333ffff333333ffffffffffffffffffffffffffffffffffffffffff333ffffffffffffffff333333fffffffffffff3333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333333333ff333333fffffffffffffffffffffffffffffffffffffffff3333ffffffffffffff333333ffffffffffffff3333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffff333333333ff333333fffffffffffffffffffffffffffffffffffffff3333ffffffffffff3333333ffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffffff333333333f333333fffffffffffffffffffffffffffffffffffffff333fffffffffff333333ffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffffffffff33333333333333ffffffffffffffffffffffffffffffffffffff333ffffffffff333333fffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffffffffffff3333333333333fffffffffffffffffffffffffffffffffffff3333fffffff333333fffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffffffffffffff3333333333333fffffffffffffffffffffffffffffffffff3333ffffff333333ffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffffffffffffffff333333333333fffffffffffffffffffffffffffffffffff333fffff333333fffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffffffffffffffffff33333333333ffffffffffffffffffffffffffffffffff3333ff333333fffffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffff3333f333333ffffffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffffffffffffffffffffff333333333ffffffffffffffffffffffffffffffff333333333fffffffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffffffffffffffffffffffff33333333fffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffff333ffffffffffffffffffffffff
        fffffffff3333fffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffff3333fffffffffffffffffffffff
        fffffffff3333fffffffffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffffff3333fffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333ffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ff311133fffffffffffffffffffffffffffffffffffffffffffffffffff33333333fffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff333333fffffffffffffffffffffffffffffffffffffffffffffff33333333333fffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffff31111fffff333333fffffffffffffffffffffffffffffffffffffffffff3333333333f333fffffffffffffffffffffff
        ffffffffff3333ffffffffffffffffffffffffffffffffffffffffffffffffff3333ffffffff333333fffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffff
        ffffffffff3333fffffffffffffffffffffffffffffffffffffffffffffffff3333ffffffffff333333fffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffff
        fffffffffff333333ffffffffffffffffffffffffffffffffffffffffffffff3333fffffffffff333333ffffffffffffffffffffffffffffffff333333333fffffffffffffffffffffffffffffffffff
        ffffffffffffff3333ffffffffffffffffffffffffffffffffffffffffffff3333ffffffffffffff333333ffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffffffffffff
        ffffffffffffff33333fffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffff333333fffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffffffffffff
        fffffffffffffff3333ffffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffff333333fffffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffffffffff
        ffffffffffffffff3333fffffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffff333333fffffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffffffff
        ffffffffffffffff33333fffffffffffffffffffffffffffffffffffffff3333fffffffffffffffffffff333333fffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffffffff
        fffffffffffffffff33333ffffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffff333333fffffffffffffffffffffffffffff3333333ffffffffffffffffffffffffffffffff
        ffffffffffffffffff33333ffffffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffff333333fffffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffff
        fffffffffffffffffff3333fffffffffffffffffffffffffffffffffff33333ffffffffffffffffffffffffff333333fffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffff
        ffffffffffffffffff33333fffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffff
        fffffffffffffffff33333fffffffffffffffffffffffffffffffffff3333fffffffffffffffffffffffff33333333333ffffffffffffffffffffffffffffff333333fffffffffffffffffffffffffff
        ffffffffffffffff33333ffffffffffffffffffffff333fffffffffff3333ffffffffffffffffffff3333333333333333fffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffff
        fffffffffffffff33333ffffffffffffffffffffff3333ffffffffff3333ffffffffffffffff333333333333333333ffffffffffffffffffffffffffffffffffff333333ffffffffffffffffffffffff
        ffffffffffffff33333fffffffffffffffffffffff3333ffffffffff3333ffffffffff333333333333333333fffffffffffffffffffffffffffffffffffffffffff3333333ffffffffffffffffffffff
        fffffffffffff33333ffffffffffffffffffffffff3333fffffffff3333ffffff333333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffffffffffff
        ffffffffffff33333fffffffffffffffffffffffff3333fffffffff33333333333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333ffffffffffffffffffff
        fffffffffff33333ffffffffffffffffffffffffff3333fffffffff33333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333ffffffffffffffffff
        ffffffffff33333fffffffffffffffffffffffffff33333fffffffff33333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffffffff
        ffffffffff3333fffffffffffffffffffffffffff333333fffffffff33333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333fffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333ffffffffffffff
        ffffffffff333ffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffff
        ffffffffff333ffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffff
        ffffffffff333ffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffffff3333333333333333333333333333333333333ffffffffffffffffffffffffffff333333ffffffffff
        ffffffffff333fffffffffffffffffffffffffff33333333fffffffffffffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333333333ffffffffff
        ffffffffff333fffffffffffffffffffffffffff3333f333fffffffffffffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333333333ffffffffff
        ffffffffff333fffffffffffffffffffffffffff333ff333fffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffff333333333333333333333333333333333333ffffffffff
        ffffffffff333fffffffffffffffffffffffffff333ff333ffffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffff333ff3333ffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffffff333ff3333ffffffffffffffffffffffffffffffffffffffff33333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffff3333fff333fffffffffffffffffffffffffffffffffffffffffff33333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffff3333fff333ffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffff333ffff333fffffffffffffffffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffff333ffff3333fffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333ffffffffffffffffffffffffff333ffff3333fffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff333fffffffffffffffffffffffff3333fffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333fffffffffffffffffffffffffffffffffffffffffff
        fffffffff3333fffffffffffffffffffffffff3333fffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffffffffff
        fffffffff3333fffffffffffffffffffffffff333ffffff3333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffff333ffffff3333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffff333fffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333ffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffffff333fffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333fffffffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffff3333fffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffff3333fffffff3333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333ffffffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffff333ffffffff3333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333fffffffffffffffffffff
        fffffffff333fffffffffffffffffffffffff333fffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333ffffffffffffffffff
        fffffffff333fffffffffffffffffffffffff333fffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333333333ffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff3333fffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333333333333333333ffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff3333fffffffff3333ffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333333333333333333333333fffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333ffffffffff3333ffffffffffffffffffffffffffffffffffffffffff33333333333333333333333333333333fffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333fffffffffff333fffffffffffffffffffffffffffffffff3333333333333333333333333333333fffffffffffffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333fffffffffff333fffffffffffffffffffffff3333333333333333333333333333333fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333fffffffffff333fffffffffffff3333333333333333333333333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff333ffffffffffffffffffffffff333fffffffffff3333ff33333333333333333333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff333fffffffffff3333333333333333fffffffffff3333333333333333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff3333333333333333333333333333333ffffffffffff33333333333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff3333333333333333333333333333333ffffffffffff3333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff33333333333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.changeScoreBy(14)
    info.changeLifeBy(14)
})
controller.combos.attachCombo("baba", function () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f88888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8fffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888ffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8888888888881111111111111111118888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        fffffffffff8fffffffffffffffffff88888888888ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f88888888888fffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        f8888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.stopCountdown()
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 . . . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
info.onScore(-8, function () {
    game.gameOver(false)
})
info.onScore(-3, function () {
    game.gameOver(false)
})
info.onScore(-9, function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let scared_ghosts: Sprite = null
let projectile: Sprite = null
let PacMan: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.thang)
mySprite.setPosition(57, 16)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f88888888888888888888888fffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8fffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffff8ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff8ffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888ffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8888888888881111111111111111118888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    fffffffffff8fffffffffffffffffff88888888888ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f88888888888fffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffff8888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff8fffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8fffffffffffffffffffffffffffff8fffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    f8888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
PacMan = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 5 5 5 5 . . . . . . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PacMan, 200, 200)
PacMan.setStayInScreen(true)
info.setLife(3)
animation.runImageAnimation(
PacMan,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 . . . . . . . . 
    . . 5 5 5 5 . . . . . . . . . . 
    . . 5 5 5 5 5 5 . . . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
animation.runImageAnimation(
mySprite,
[img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    111111111......11111111.........111...11............111111111111
    1..............1......1.......111..111.11.......1111............
    1..............1......1.......1....1....11......1...............
    1..............1......1.......1....1.....1......1...............
    1.............11......11......1....1.....1......1...............
    1.............1........1......1....1.....1......1...............
    1.............1........1......1....1.....1......111111111111....
    1.............1........1......1....1.....1.......1..........1...
    1..111111.....1111111111......1....11.....1......1..............
    1.......11....1........1......1....1......1......1..............
    1........1....1........1......1...........1......1..............
    1........11...1........1......1...........1......1..............
    1.........1...1........1......1..........11......1..............
    1.........1...1........1......1..........1.......1..............
    1.........1...1........1......1..........1.......1..............
    11111111111...1........1......1..........1.......11111111111....
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `,img`
    ................111111....11........11111111111........111111...
    ....111111...11111.......11.11......1.........1....1111.1.......
    ...11............1......11...1......1.........1...1.....1.......
    ..11.............1......1....11....1..........1.........1.......
    ..1..............1......1.....1....11........11.........1.......
    ..11.............1......1.....1....11111111111..........1.......
    ...111...........1......1.....1....1.11.................1.......
    .....1...........1......1.....1....1..11................1.......
    .....11..........1......1....11....1...1................1.......
    ......1..........1......1111111....1....1...............1.......
    ......1..........1......1.....1....1.....1..............1.......
    ......1..........1......1.....1....1.....11.............1.......
    1.....1..........1......1.....1...11......11............1.......
    11...11..........1......1....11...1........1............1.......
    .111.1...........1......1....1....1.........11..........1.......
    ...111...........1......1....1....1..........1..........1.......
    `],
100,
false
)
pause(2000)
game.onUpdateInterval(randint(1000, 4000), function () {
    scared_ghosts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 1 1 3 3 3 1 1 3 3 3 . . 
        . . 3 1 1 1 1 3 1 1 1 1 3 3 . . 
        . . 3 8 8 1 1 3 8 8 1 1 3 3 . . 
        . 3 3 8 8 1 1 3 8 8 1 1 3 3 3 . 
        . 3 3 3 1 1 3 3 3 1 1 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 . 3 3 3 . . 3 3 3 . 3 3 . 
        . 3 . . . 3 3 . . 3 3 . . . 3 . 
        `, SpriteKind.Enemy)
    scared_ghosts.setVelocity(-100, 0)
    mySprite.setStayInScreen(true)
    scared_ghosts.setPosition(160, randint(5, 115))
    scared_ghosts.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(1000, 4000), function () {
    scared_ghosts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 1 1 4 4 4 1 1 4 4 4 . . 
        . . 4 1 1 1 1 4 1 1 1 1 4 4 . . 
        . . 4 8 8 1 1 4 8 8 1 1 4 4 . . 
        . 4 4 8 8 1 1 4 8 8 1 1 4 4 4 . 
        . 4 4 4 1 1 4 4 4 1 1 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 . 4 4 4 . . 4 4 4 . 4 4 . 
        . 4 . . . 4 4 . . 4 4 . . . 4 . 
        `, SpriteKind.Enemy)
    scared_ghosts.setVelocity(-100, 0)
    scared_ghosts.setPosition(160, randint(5, 115))
    scared_ghosts.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(1000, 4000), function () {
    scared_ghosts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 1 1 9 9 9 1 1 9 9 9 . . 
        . . 9 1 1 1 1 9 1 1 1 1 9 9 . . 
        . . 9 8 8 1 1 9 8 8 1 1 9 9 . . 
        . 9 9 8 8 1 1 9 8 8 1 1 9 9 9 . 
        . 9 9 9 1 1 9 9 9 1 1 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 . 9 9 9 . . 9 9 9 . 9 9 . 
        . 9 . . . 9 9 . . 9 9 . . . 9 . 
        `, SpriteKind.Enemy)
    scared_ghosts.setVelocity(-100, 0)
    scared_ghosts.setPosition(160, randint(5, 115))
    scared_ghosts.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(1000, 4000), function () {
    scared_ghosts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 2 1 1 2 2 2 . . 
        . . 2 1 1 1 1 2 1 1 1 1 2 2 . . 
        . . 2 8 8 1 1 2 8 8 1 1 2 2 . . 
        . 2 2 8 8 1 1 2 8 8 1 1 2 2 2 . 
        . 2 2 2 1 1 2 2 2 1 1 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . 
        . 2 . . . 2 2 . . 2 2 . . . 2 . 
        `, SpriteKind.Enemy)
    scared_ghosts.setVelocity(-100, 0)
    scared_ghosts.setPosition(160, randint(5, 115))
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    scared_ghosts.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    scared_ghosts = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 1 1 8 8 1 1 8 8 8 8 . 
        . 8 8 8 8 1 1 8 8 1 1 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 1 1 8 8 1 1 8 8 1 1 8 8 . 
        . 8 1 8 8 1 1 8 8 1 1 8 8 1 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 . 8 8 8 . . 8 8 8 . 8 8 . 
        . 8 . . . 8 8 . . 8 8 . . . 8 . 
        `, SpriteKind.Food)
    scared_ghosts.setVelocity(-100, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.thang)
    scared_ghosts.setPosition(160, randint(5, 115))
    scared_ghosts.setFlag(SpriteFlag.AutoDestroy, true)
})
