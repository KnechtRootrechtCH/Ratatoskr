PowerDistributionToWeapons() {
    Send {F5}
}
PowerDistributionToShields() {
    Send {F6}
}
PowerDistributionToEngines() {
    Send {F7}
}
PowerDistributionReset() {
    Send {F8}
}
PowerIncrease() {
    Send {LAlt down}
    Send {Numpad5}
    Send {LAlt up}
}
PowerDecrease() {
    Send {LAlt down}
    Send {Numpad4}
    Send {LAlt up}
}
PowerMax() {
    Send {LAlt down}
    Send {Numpad5}
    Sleep 100
    Send {Numpad5}
    Send {LAlt up}
}
PowerMin() {
    Send {LAlt down}
    Send {Numpad4}
    Sleep 100
    Send {Numpad4}
    Send {LAlt up}
}
PowerWeapons_Toggle() {
    Send 7
}
PowerShields_Toggle() {
    Send 6
}
PowerEngines_Toggle() {
    Send 4
}
Power_Toggle() {
    Send 5
}