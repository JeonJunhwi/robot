input.onButtonPressed(Button.A, function () {
    threshold += 100
    basic.showString("" + (threshold))
})
function turn () {
    magicbit.MotorRun(magicbit.Motors.M1, -255)
    magicbit.MotorRun(magicbit.Motors.M2, 255)
}
input.onButtonPressed(Button.B, function () {
    threshold += -100
    basic.showString("" + (threshold))
})
function forward () {
    magicbit.MotorRun(magicbit.Motors.M1, 255)
    magicbit.MotorRun(magicbit.Motors.M2, 255)
}
let threshold = 0
threshold = 2000
let timer = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > threshold) {
        turn()
        basic.pause(1000)
    } else {
        forward()
    }
    if (input.runningTime() > timer) {
        timer = timer + 1000
        turn()
        basic.pause(200)
    }
})
