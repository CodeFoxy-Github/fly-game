input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x += -1
})
input.onButtonPressed(Button.AB, function () {
    y = 5
    for (let index = 0; index < 6; index++) {
        basic.pause(100)
        basic.clearScreen()
        led.plot(x - 1, 4)
        led.plot(x - 1, y)
        y += -1
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x += 1
})
let y = 0
let x = 0
x = 1
basic.forever(function () {
    if (x > 5) {
        x = 5
    }
    if (x < 1) {
        x = 1
    }
})
basic.forever(function () {
    led.plot(x - 1, 4)
})
