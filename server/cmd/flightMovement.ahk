Afterburner_On() {
    Send {LShift down}
}
Afterburner_Off() {
    Send {LShift up}
}
Boost_On() {
    Send {X down}
}
Boost_Off() {
    Send {X up}
}
LandingGear_Toggle() {
    Send n
}
Autoland() {
    Send {n down}
    Sleep 1000
    Send {n up}
}
QuantumDriveSystem_Toggle() {
    Send b
}
QuantumDrive() {
    Send {b down}
    Sleep 1000
    Send {b up}
}
Spacebreak_On() {
    Send {c down}
}
Spacebreak_Off() {
    Send {c up}
}
MatchTargetVelocity() {
    Send m
}
Decoupled_Toggle() {
    Send v
}
IfcsSafety_Cycle() {
    Send 2
}
Esp_Toggle() {
    Send {LAlt down}
    Send 0
    Send {LAlt up}
}
MouseMoveMode_Cycle() {
    Send {LAlt down}
    SendRaw, ,
    Send {LAlt up}
}
ThrottleMinMax_Toggle() {
    Send {BackSpace}
}
ThrottleUp() {
    Send w
}
ThrottleUp_On() {
    Send {w down}
}
ThrottleUp_Off() {
    Send {w up}
}
ThrottleDown() {
    Send s
}
ThrottleDown_On() {
    Send {s down}
}
ThrottleDown_Off() {
    Send {s up}
}