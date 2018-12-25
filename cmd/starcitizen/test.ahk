TestWithReturnValue() {
    Send {n down}{n up}
    return "TestWithReturnValue_OK"
}
Test() {
    Send n
}