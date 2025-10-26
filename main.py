def on_bluetooth_connected():
    basic.show_leds("""
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        """)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_leds("""
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        """)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_mes_dpad_controller_id_microbit_evt():
    if control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_DOWN:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
        motorbit.motor_run_dual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 150)
        motorbit.motor_run_dual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 150)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_1_UP:
        basic.show_leds("""
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            """)
        motorbit.motor_stop_all()
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_DOWN:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
        motorbit.motor_run_dual(motorbit.Motors.M1, -150, motorbit.Motors.M2, -150)
        motorbit.motor_run_dual(motorbit.Motors.M3, -150, motorbit.Motors.M4, -150)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_2_UP:
        basic.show_leds("""
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            """)
        motorbit.motor_stop_all()
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_DOWN:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        motorbit.motor_run_dual(motorbit.Motors.M1, 0, motorbit.Motors.M2, 150)
        motorbit.motor_run_dual(motorbit.Motors.M3, 0, motorbit.Motors.M4, 150)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_3_UP:
        basic.show_leds("""
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            """)
        motorbit.motor_stop_all()
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_DOWN:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
        motorbit.motor_run_dual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 0)
        motorbit.motor_run_dual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 0)
    elif control.event_value() == EventBusValue.MES_DPAD_BUTTON_4_UP:
        basic.show_leds("""
            . # # # .
            . # . . .
            . . # . .
            . . . # .
            . # # # .
            """)
        motorbit.motor_stop_all()
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.UNTIL_DONE)
basic.show_icon(IconNames.YES)
basic.pause(2000)
motorbit.motor_stop_all()