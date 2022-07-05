basic.forever(function () {
    if (input.temperature() > 20) {
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
basic.forever(function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
    basic.pause(100)
})
