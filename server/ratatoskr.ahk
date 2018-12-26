#Persistent
#SingleInstance, force
SetBatchLines, -1

paths := {}
paths["/"] := Func("Ratakoskr")
paths["404"] := Func("NotFound")
paths["/logo"] := Func("Logo")

server := new HttpServer()
server.LoadMimes(A_ScriptDir . "/mime.types")
server.SetPaths(paths)
server.Serve(4242)

title := "Rotakoskr"
message := "Listening and ready to run up the tree of life"
TrayTip %title%, %message%, 1, 17

/*
Class_Console("console",100,100,400,435,"Ratatoskr")
console.show()
console.log(startup)
*/
return

Logo(ByRef req, ByRef res, ByRef server) {
    server.ServeFile(res, A_ScriptDir . "/logo.png")
    res.status := 200
}

NotFound(ByRef req, ByRef res) {
    res.SetBodyText("Page not found")
    res.status := 404
}

Ratakoskr(ByRef req, ByRef res) {
    title := "Ratakoskr"
    success:= false
    message:= null
    result:= null

    command := req.queries["cmd"]
    function := Func(command)

    if (commandFunction != 0) {
        result := commandFunction.Call()
        success := true
        message := "Command executed"
    } else {
        message := "Command not found"
        trayMessage := "Command not found: " . cmd
        TrayTip %title%, %trayMessage%, 1, 18
    }

    if (success) {
        successString := "true"
    } else {
        successString := "false"
    }

    /*
    console.log("Command=" . result . "; success=" . successString . "; result=" . result)
    */

    res.SetBodyText("{""command"": """ . command . """, ""message"": """ . message . """, ""result"":""" . result . """, ""success"": " . successString . "}")
    res.headers["Content-type"] := "application/json"
    res.headers["charset"] := "uft-8"
    res.headers["Access-Control-Allow-Origin"] := "*"
    res.status := 200
}

#include, %A_ScriptDir%\lib\Class_Console\Class_Console.ahk
#include, %A_ScriptDir%\lib\AHKsock\AHKsock.ahk
#include, %A_ScriptDir%\lib\AHKhttp\AHKhttp.ahk

#include, %A_ScriptDir%\cmd\flight.ahk
#include, %A_ScriptDir%\cmd\util.ahk