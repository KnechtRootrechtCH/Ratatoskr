
import axios from 'axios';
import { Promise } from 'q';

class RatatoskrService {
    testConnection(server, port) {
        return new Promise((resolve) => {
            resolve(this.executeCommand(server, port, 'TestConnection'))
        });

    }

    executeCommand(server, port, command) {
        return new Promise((resolve) => {
            console.debug('RatatoskrService.executeCommand() : ', server, port, command)
            axios.get(`http://${server}:${port}/?cmd=${command}`)
                .then(result => {
                    console.debug('RatatoskrService.executeCommand() =>', result.data)
                    result.data.connected = true;
                    resolve(result.data);
                })
                .catch(reason => {
                    console.debug('RatatoskrService.executeCommand() : failed =>', reason)
                    resolve({
                        "command": command,
                        "message": reason.message,
                        "result": null,
                        "success": false,
                        "connected": false
                    })
                });
        });

    }
}

// ensure single instance
const service = new RatatoskrService();
export default service;