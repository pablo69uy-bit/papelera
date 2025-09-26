basic.forever(function () {
    servos.P0.setAngle(0)
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) <= 30) {
        servos.P0.setAngle(90)
        basic.pause(5000)
    }
})
