FireMiningLaser_On() {
    Click, down
}
FireMiningLaser_Off() {
    Click, up
}
SwitchMiningLaser_Toggle() {
    MouseClick, right
}
MiningLaserPowerIncrease() {
    Send {WheelUp}
}
MiningLaserPowerIncrease_On() {
    title := "Rotakoskr"
    message := "Continious scrolling not implemented yet"
    TrayTip %title%, %message%, 1, 17
}
MiningLaserPowerIncrease_Off() {
    title := "Rotakoskr"
    message := "Continious scrolling not implemented yet"
    TrayTip %title%, %message%, 1, 17
}
MiningLaserPowerDecrease() {
    Send {WheelDown}
}
MiningLaserPowerDecrease_On() {
    title := "Rotakoskr"
    message := "Continious scrolling not implemented yet"
    TrayTip %title%, %message%, 1, 17
}
MiningLaserPowerDecrease_Off() {
    title := "Rotakoskr"
    message := "Continious scrolling not implemented yet"
    TrayTip %title%, %message%, 1, 17
}