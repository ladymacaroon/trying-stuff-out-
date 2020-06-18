input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        # . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # # .
        . . . # .
        . . # # .
        . . . # .
        . . # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        `)
    basic.showString("who comes knocking at your door?")
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # . . .
        . # # . .
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        # . . # .
        . # # . .
        # . . # .
        . # # . .
        `)
    basic.showString("I give the dinner on your plate")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . # .
        # . # . #
        # . # . #
        # . # . #
        # . . # .
        `)
    basic.showString("are just the same!")
    basic.showString("oh yeah!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    control.waitMicros(0)
})
