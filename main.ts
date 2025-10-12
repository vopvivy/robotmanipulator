bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        motorbit.MotorRunDual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 150)
        motorbit.MotorRunDual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        motorbit.MotorStopAll()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        motorbit.MotorRunDual(motorbit.Motors.M1, -150, motorbit.Motors.M2, -150)
        motorbit.MotorRunDual(motorbit.Motors.M3, -150, motorbit.Motors.M4, -150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        motorbit.MotorStopAll()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        motorbit.MotorRunDual(motorbit.Motors.M1, 0, motorbit.Motors.M2, 150)
        motorbit.MotorRunDual(motorbit.Motors.M3, 0, motorbit.Motors.M4, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        motorbit.MotorStopAll()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        motorbit.MotorRunDual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 0)
        motorbit.MotorRunDual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            `)
        motorbit.MotorStopAll()
    }
})
motorbit.MotorStopAll()
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Yes)
basic.pause(2000)
