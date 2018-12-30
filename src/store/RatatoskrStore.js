import {observable, action, computed} from 'mobx';
import RatatoskrService from '../service/RatatoskrService';
import LocalStorageService from '../service/LocalStorageService';

class RatatoskrStore {
    @observable tab = 'core'
    @observable server = '';
    @observable port = 4242;
    @observable connected = true;
    @observable testingConnection = false;
    @observable loadingSettings = false;

    constructor () {
        this.loadConnection();
        this.testConnection();
        const tab = LocalStorageService.loadTab();
        if (tab) {
            this.tab = tab;
        }
    }

    @action setTab = (tab) => {
        console.debug("RatatoskrStore.setTab() :", tab);
        this.tab = tab;
        LocalStorageService.saveTab(tab);
    }

    @action setServer= (server) => {
        console.debug("RatatoskrStore.setServer() =>", server)
        this.server = server;
    }

    @action setPort = (port) => {
        console.debug("RatatoskrStore.setPort() =>", port)
        this.port = port;
    }

    @action loadConnection = () => {
        const server = LocalStorageService.loadServer();
        const port = LocalStorageService.loadPort();
        if (server) {
            this.server = server;
        }
        if (port) {
            this.port = port;
        }
    }

    @action saveConnection = () => {
        console.debug("RatatoskrStore.loadConnection() =>", this.server, this.port)
        this.connected = false;
        LocalStorageService.saveServer(this.server);
        LocalStorageService.savePort(this.port);
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

        this.testingConnection = true;
        RatatoskrService.testConnection(this.server, this.port)
            .then((result) => {
                console.debug("RatatoskrStore.testConnection() : success =>", result.connected)
                this.connected = result.connected;
                this.testingConnection = false;
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