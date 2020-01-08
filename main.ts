function effects2 () {
    effects.starField.startScreenEffect()
}
function start_countdown () {
    info.startCountdown(5)
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 f f f 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . b b 1 1 1 1 1 b b . . . . . . . . . . . . 
. . . . . . . . . . . 2 b 1 1 1 1 1 2 b . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 1 1 1 1 1 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 1 1 1 1 1 2 2 . . . . . . . . . . . . 
`, SpriteKind.Player)
start_countdown()
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 2 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f 
`)
