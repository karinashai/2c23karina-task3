let count = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
    count = 9
    count += 0
})
