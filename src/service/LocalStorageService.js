
class LocalStorageService {
    serverKey = 'ratatoskr.server';
    portKey = 'ratatoskr.port';
    tabKey = 'ratatoskr.tab';

    loadServer() {
        return localStorage.getItem(this.serverKey)
    }

    loadPort() {
        return localStorage.getItem(this.portKey)
    }

    loadTab() {
        return localStorage.getItem(this.tabKey)
    }

    saveServer(server) {
        localStorage.setItem(this.serverKey, server);
    }

    savePort(port) {
        localStorage.setItem(this.portKey, port);
    }

    saveTab(tab) {
        localStorage.setItem(this.tabKey, tab);
    }
}

// ensure single instance
const service = new LocalStorageService();
export default service;