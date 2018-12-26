import {observable, action, computed} from 'mobx';
import RatatoskrService from '../service/RatatoskrService';

class RatatoskrStore {
    @observable tab = 'core'
    @observable server = '192.168.1.122';
    @observable port = 4242;
    @observable connected = true;

    constructor () {
        this.loadSettings();
        this.testConnection();
    }

    @action setTab = (tab) => {
        this.tab = tab;
    }

    @action setServer= (address) => {
        this.address = address;
    }

    @action setPort = (port) => {
        this.port = port;
    }

    @action loadSettings = () => {
        //TODO: implement
    }

    @action saveSettings = () => {
        //TODO: implement
    }

    @action testConnection = () => {
        if (!this.server) {
            this.connected = false;
            return;
        }
        if (this.port <= 0) {
            this.connected = false;
            return;
        }
        RatatoskrService.testConnection(this.server, this.port)
            .then((result) => {
                console.debug("RatatoskrStore.testConnection() =>", result.connected)
                this.connected = result.connected;
            });
    }

    @action executeCommand = (command) => {
        RatatoskrService.executeCommand(this.server, this.port, command)
            .then((result) => {
                console.debug("RatatoskrStore.executeCommand() =>", result)
                if (!result.connected) {
                    this.testConnection()
                } else if (!result.success) {
                    // TODO: show warning snackbar
                }
            });
    }

    @computed get serverAddress() {
        return this.address + ':' + this.port;
    }
}

// ensure single instance
const store = new RatatoskrStore();
export default store;