import {observable, action, computed} from 'mobx';

class ConnectionStore {
    @observable address = '';
    @observable port = 0;

    @action setPort = (port) => {
        this.port = port;
    }

    @action setIp = (address) => {
        this.address = address;
    }

    @computed get serverUri() {
        return 'http://' + this.address + ':' + this.port;
    }

    @computed get missingSettingsCount() {
        let count = 0;
        if (!this.address) {
            count++;
        }
        if (this.port <= 0) {
            count++;
        }
        return count;
    }
}

// ensure single instance
const store = new ConnectionStore();
export default store;