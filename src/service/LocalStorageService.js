
class LocalStorageService {
    serverKey = 'ratatoskr.server';
    portKey = 'ratatoskr.port';

    loadServer() {
        return localStorage.getItem(this.serverKey)
    }

    loadPort() {
        return localStorage.getItem(this.portKey)
    }

    saveServer(server) {
        localStorage.setItem(this.serverKey, server);
    }

    savePort(port) {
        localStorage.setItem(this.portKey, port);
    }
}

// ensure single instance
const service = new LocalStorageService();
export default service;