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
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
motorbit.MotorRunDual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 150)
basic.pause(2000)
motorbit.MotorRunDual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 150)
basic.pause(2000)
motorbit.MotorStopAll()
