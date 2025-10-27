function car_back () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, -1 * speed_LB, motorbit.Motors.M4, -1 * speed_RB)
    motorbit.MotorRunDual(motorbit.Motors.M2, -1 * speed_LB, motorbit.Motors.M3, -1 * speed_RB)
}
function car_move_RF () {
    basic.showLeds(`
        . # # # #
        . . . # #
        . . # . #
        . # . . #
        # . . . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 75, motorbit.Motors.M4, 0)
    motorbit.MotorRunDual(motorbit.Motors.M2, 0, motorbit.Motors.M3, 75)
}
function drift_left () {
    basic.showLeds(`
        . . # . #
        . # . # .
        # # # # #
        . # . # .
        . . # . #
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 0, motorbit.Motors.M4, 0)
    motorbit.MotorRunDual(motorbit.Motors.M2, 75, motorbit.Motors.M3, -75)
}
function car_left () {
    basic.showLeds(`
        . . # # .
        . # . . #
        # # # . #
        . # . . #
        . . . # .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, -75, motorbit.Motors.M4, 75)
    motorbit.MotorRunDual(motorbit.Motors.M2, -75, motorbit.Motors.M3, 75)
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    connect_flag = 1
    while (connect_flag == 1) {
        ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        serial.writeString(ble_val)
        serial.writeLine("")
        if (ble_val == "a") {
            car_forward()
        } else if (ble_val == "b") {
            car_left()
        } else if (ble_val == "c") {
            car_back()
        } else if (ble_val == "d") {
            car_right()
        } else if (ble_val == "k") {
            car_left_move()
        } else if (ble_val == "h") {
            car_right_move()
        } else if (ble_val == "g") {
            car_move_RF()
        } else if (ble_val == "i") {
            car_move_RB()
        } else if (ble_val == "j") {
            car_move_LB()
        } else if (ble_val == "l") {
            car_move_LF()
        } else if (ble_val == "s") {
            basic.showLeds(`
                . # # # .
                . # . . .
                . . # . .
                . . . # .
                . # # # .
                `)
            motorbit.MotorStopAll()
        } else if (ble_val == "t") {
        	
        } else if (ble_val == "u") {
        	
        } else if (ble_val == "e") {
            drift_left()
        } else if (ble_val == "f") {
            drift_right()
        } else if (ble_val == "m") {
            if (color_num < 9) {
                color_num = color_num + 1
            }
            showcolor()
        } else if (ble_val == "n") {
            if (color_num > 0) {
                color_num = color_num - 1
            }
            showcolor()
        } else if (ble_val == "o") {
        	
        } else if (ble_val == "v") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_LF = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_LF)
            serial.writeLine("")
        } else if (ble_val == "w") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_LB = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_LB)
            serial.writeLine("")
        } else if (ble_val == "x") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_RF = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_RF)
            serial.writeLine("")
        } else if (ble_val == "y") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_RB = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_RB)
            serial.writeLine("")
        }
    }
})
function car_move_LB () {
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # # .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 0, motorbit.Motors.M4, -75)
    motorbit.MotorRunDual(motorbit.Motors.M2, -75, motorbit.Motors.M3, 0)
}
function showcolor () {
    basic.showIcon(IconNames.Chessboard)
}
function car_move_RB () {
    basic.showLeds(`
        # . . . .
        . # . . #
        . . # . #
        . . . # #
        . # # # #
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, -75, motorbit.Motors.M4, 0)
    motorbit.MotorRunDual(motorbit.Motors.M2, 0, motorbit.Motors.M3, -75)
}
function tracking () {
    basic.showIcon(IconNames.TShirt)
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
})
function car_right_move () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 75, motorbit.Motors.M4, -75)
    motorbit.MotorRunDual(motorbit.Motors.M2, -75, motorbit.Motors.M3, 75)
}
function drift_right () {
    basic.showLeds(`
        # . # . .
        . # . # .
        # # # # #
        . # . # .
        # . # . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 0, motorbit.Motors.M4, 0)
    motorbit.MotorRunDual(motorbit.Motors.M2, -75, motorbit.Motors.M3, 75)
}
function follow () {
    basic.showIcon(IconNames.House)
}
function car_move_LF () {
    basic.showLeds(`
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        . . . . #
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 0, motorbit.Motors.M4, 75)
    motorbit.MotorRunDual(motorbit.Motors.M2, 75, motorbit.Motors.M3, 0)
}
function avoid () {
    basic.showIcon(IconNames.SmallHeart)
}
function car_forward () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, speed_LF, motorbit.Motors.M4, speed_RF)
    motorbit.MotorRunDual(motorbit.Motors.M2, speed_LF, motorbit.Motors.M3, speed_RF)
}
function car_left_move () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, -75, motorbit.Motors.M4, 75)
    motorbit.MotorRunDual(motorbit.Motors.M2, 75, motorbit.Motors.M3, -75)
}
function car_right () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . # # #
        # . . # .
        . # . . .
        `)
    motorbit.MotorRunDual(motorbit.Motors.M1, 75, motorbit.Motors.M4, -75)
    motorbit.MotorRunDual(motorbit.Motors.M2, 75, motorbit.Motors.M3, -75)
}
let ble_val = ""
let connect_flag = 0
let speed_RF = 0
let speed_RB = 0
let speed_LF = 0
let speed_LB = 0
let color_num = 0
serial.redirectToUSB()
motorbit.MotorStopAll()
basic.pause(2000)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.pause(2000)
basic.showIcon(IconNames.Happy)
color_num = 0
speed_LB = 150
speed_LF = 150
speed_RB = 150
speed_RF = 150
basic.pause(2000)
basic.forever(function () {
    if (ble_val == "p") {
        tracking()
    } else if (ble_val == "q") {
        follow()
    } else if (ble_val == "r") {
        avoid()
    } else if (ble_val == "s") {
        motorbit.MotorStopAll()
    }
})
