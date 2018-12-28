TestConnection() {
    title := "Rotakoskr"
    message := "Connection established"
    TrayTip %title%, %message%, 1, 17
    return "ok"
}
TestWithReturnValue() {
    Send {n down}{n up}
    return "TestWithReturnValue_OK"
}
Test() {
    title := "Rotakoskr"
    message := "Test command executed"
    TrayTip %title%, %message%, 1, 17
}