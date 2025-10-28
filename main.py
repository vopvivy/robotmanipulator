def car_back():
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1,
        -1 * speed_LB,
        motorbit.Motors.M4,
        -1 * speed_RB)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        -1 * speed_LB,
        motorbit.Motors.M3,
        -1 * speed_RB)
def car_move_RF():
    basic.show_leds("""
        . # # # #
        . . . # #
        . . # . #
        . # . . #
        # . . . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, speed_LF, motorbit.Motors.M4, 0)
    motorbit.motor_run_dual(motorbit.Motors.M2, 0, motorbit.Motors.M3, speed_RF)
def drift_left():
    basic.show_leds("""
        . . # . #
        . # . # .
        # # # # #
        . # . # .
        . . # . #
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, 0, motorbit.Motors.M4, 0)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        speed_LF,
        motorbit.Motors.M3,
        -1 * speed_RB)
def car_left():
    basic.show_leds("""
        . . # # .
        . # . . #
        # # # . #
        . # . . #
        . . . # .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1,
        -1 * speed_LB,
        motorbit.Motors.M4,
        speed_RF)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        -1 * speed_LB,
        motorbit.Motors.M3,
        speed_RF)

def on_bluetooth_connected():
    global connect_flag, ble_val, color_num, speed_LF, speed_LB, speed_RF, speed_RB
    basic.show_leds("""
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        """)
    connect_flag = 1
    while connect_flag == 1:
        ble_val = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
        serial.write_string(ble_val)
        serial.write_line("")
        if ble_val == "a":
            car_forward()
        elif ble_val == "b":
            car_left()
        elif ble_val == "c":
            car_back()
        elif ble_val == "d":
            car_right()
        elif ble_val == "k":
            car_left_move()
        elif ble_val == "h":
            car_right_move()
        elif ble_val == "g":
            car_move_RF()
        elif ble_val == "i":
            car_move_RB()
        elif ble_val == "j":
            car_move_LB()
        elif ble_val == "l":
            car_move_LF()
        elif ble_val == "s":
            basic.show_leds("""
                . # # # .
                . # . . .
                . . # . .
                . . . # .
                . # # # .
                """)
            motorbit.motor_stop_all()
        elif ble_val == "t":
            pass
        elif ble_val == "u":
            pass
        elif ble_val == "e":
            drift_left()
        elif ble_val == "f":
            drift_right()
        elif ble_val == "m":
            if color_num < 9:
                color_num = color_num + 1
            showcolor()
        elif ble_val == "n":
            if color_num > 0:
                color_num = color_num - 1
            showcolor()
        elif ble_val == "o":
            pass
        elif ble_val == "v":
            ble_val = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
            basic.pause(100)
            speed_LF = parse_float(ble_val)
            basic.pause(100)
            serial.write_number(speed_LF)
            serial.write_line("")
        elif ble_val == "w":
            ble_val = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
            basic.pause(100)
            speed_LB = parse_float(ble_val)
            basic.pause(100)
            serial.write_number(speed_LB)
            serial.write_line("")
        elif ble_val == "x":
            ble_val = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
            basic.pause(100)
            speed_RF = parse_float(ble_val)
            basic.pause(100)
            serial.write_number(speed_RF)
            serial.write_line("")
        elif ble_val == "y":
            ble_val = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
            basic.pause(100)
            speed_RB = parse_float(ble_val)
            basic.pause(100)
            serial.write_number(speed_RB)
            serial.write_line("")
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def car_move_LB():
    basic.show_leds("""
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # # .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, 0, motorbit.Motors.M4, -1 * speed_RB)
    motorbit.motor_run_dual(motorbit.Motors.M2, -1 * speed_LB, motorbit.Motors.M3, 0)
def showcolor():
    basic.show_icon(IconNames.CHESSBOARD)
def car_move_RB():
    basic.show_leds("""
        # . . . .
        . # . . #
        . . # . #
        . . . # #
        . # # # #
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, -1 * speed_LB, motorbit.Motors.M4, 0)
    motorbit.motor_run_dual(motorbit.Motors.M2, 0, motorbit.Motors.M3, -1 * speed_RB)
def tracking():
    basic.show_icon(IconNames.TSHIRT)

def on_bluetooth_disconnected():
    basic.show_leds("""
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        """)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def car_right_move():
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1,
        speed_LF,
        motorbit.Motors.M4,
        -1 * speed_RB)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        -1 * speed_LB,
        motorbit.Motors.M3,
        speed_RF)
def drift_right():
    basic.show_leds("""
        # . # . .
        . # . # .
        # # # # #
        . # . # .
        # . # . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, 0, motorbit.Motors.M4, 0)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        -1 * speed_LB,
        motorbit.Motors.M3,
        speed_RF)
def follow():
    basic.show_icon(IconNames.HOUSE)
def car_move_LF():
    basic.show_leds("""
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        . . . . #
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, 0, motorbit.Motors.M4, speed_RF)
    motorbit.motor_run_dual(motorbit.Motors.M2, speed_LF, motorbit.Motors.M3, 0)
def avoid():
    basic.show_icon(IconNames.SMALL_HEART)
def car_forward():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1, speed_LF, motorbit.Motors.M4, speed_RF)
    motorbit.motor_run_dual(motorbit.Motors.M2, speed_LF, motorbit.Motors.M3, speed_RF)
def car_left_move():
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1,
        -1 * speed_LB,
        motorbit.Motors.M4,
        speed_RF)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        speed_LF,
        motorbit.Motors.M3,
        -1 * speed_RB)
def car_right():
    basic.show_leds("""
        . # # . .
        # . . # .
        # . # # #
        # . . # .
        . # . . .
        """)
    motorbit.motor_run_dual(motorbit.Motors.M1,
        speed_LF,
        motorbit.Motors.M4,
        -1 * speed_RB)
    motorbit.motor_run_dual(motorbit.Motors.M2,
        speed_LF,
        motorbit.Motors.M3,
        -1 * speed_RB)
ble_val = ""
connect_flag = 0
speed_RF = 0
speed_RB = 0
speed_LF = 0
speed_LB = 0
color_num = 0
serial.redirect_to_usb()
motorbit.motor_stop_all()
basic.pause(5000)
basic.show_icon(IconNames.HAPPY)
color_num = 0
speed_LB = 75
speed_LF = 75
speed_RB = 75
speed_RF = 75
basic.pause(2000)
music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.UNTIL_DONE)
basic.pause(2000)

def on_forever():
    if ble_val == "p":
        tracking()
    elif ble_val == "q":
        follow()
    elif ble_val == "r":
        avoid()
    elif ble_val == "s":
        motorbit.motor_stop_all()
basic.forever(on_forever)
