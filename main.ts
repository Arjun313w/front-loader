radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 20)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 170)
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    } else if (receivedNumber == 4) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
    } else if (receivedNumber == 5) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
DFRobotMaqueenPlusV2.init()
radio.setGroup(23)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(5)
    }
})
