function AvgDistance () {
    avg_distance = 0
    for (let index = 0; index < 5; index++) {
        avg_distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) + avg_distance
    }
    avg_distance = avg_distance / 10
    return avg_distance
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        while (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) >= 5) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
            if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
                cuteBot.motors(60, 10)
            }
            if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
                cuteBot.motors(10, 60)
            }
            if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
                cuteBot.motors(25, 25)
            }
        }
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.stopcar()
        radio.sendNumber(2)
    }
})
let avg_distance = 0
radio.setGroup(1)
while (AvgDistance() >= 5) {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(60, 10)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 60)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(25, 25)
    }
}
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
cuteBot.stopcar()
radio.sendNumber(2)
