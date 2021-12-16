let buttonPressed = false
let startTime = 0
let molePosition = 0
basic.showString("3-2-1")
let gameRunning = true
while (gameRunning) {
    molePosition = randint(0, 1)
    gameRunning = false
    basic.pause(200)
    if (molePosition == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    startTime = input.runningTime()
}
while (buttonPressed == false) {
    if (input.runningTime() - startTime > 1000) {
        game.gameOver()
    }
    if (buttonPressed == (molePosition == 0 && input.buttonIsPressed(Button.A))) {
        buttonPressed = true
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        game.addScore(1)
    } else if (buttonPressed == (molePosition == 0 && input.buttonIsPressed(Button.B))) {
        buttonPressed = true
        game.gameOver()
    }
}
basic.forever(function () {
	
})
