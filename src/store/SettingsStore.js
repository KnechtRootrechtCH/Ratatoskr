import {observable, action, computed} from 'mobx';

class SettingsStore {
    @observable tab = 'core'
    @observable address = '';
    @observable port = 0;
    @observable connected = false;

    constructor () {
        this.loadSettings();
        this.testConnection();
    }

    @action setTab = (tab) => {
        this.tab = tab;
    }

    @action setPort = (port) => {
        this.port = port;
        this.testConnection();
    }

    @action setIp = (address) => {
        this.address = address;
        this.testConnection();
    }

    @action loadSettings = () => {
        //TODO: implement
    }

    @action saveSettings = () => {
        //TODO: implement
    }

    @action testConnection = () => {
        if (!this.address) {
            this.connected = false;
        }
        if (this.port <= 0) {
            this.connected = false;
        }
        // TODO: actualy test connection!
        this.connected = false;
    }

    @computed get serverUri() {
        return 'http://' + this.address + ':' + this.port;
    }
}

// ensure single instance
const store = new SettingsStore();
export default store;