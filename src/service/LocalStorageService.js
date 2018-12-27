
class LocalStorageService {
    serverKey = 'ratatoskr.server';
    portKey = 'ratatoskr.port';
    tabKey = 'ratatoskr.tab';
    themeTypeKey = 'ratatoskr.themeType';
    ThemedNavbarKey = 'ratatoskr.ThemedNavbar';
    primaryColorKey = 'ratatoskr.primaryColor';
    secondaryColorKey = 'ratatoskr.secondaryColor';

    loadServer() {
        return localStorage.getItem(this.serverKey);
    }

    loadPort() {
        return localStorage.getItem(this.portKey);
    }

    loadTab() {
        return localStorage.getItem(this.tabKey);
    }

    loadThemeType() {
        return localStorage.getItem(this.themeTypeKey);
    }

    loadThemedNavbar() {
        return JSON.parse(localStorage.getItem(this.ThemedNavbarKey));
    }

    loadPrimaryColor() {
        return JSON.parse(localStorage.getItem(this.primaryColorKey));
    }

    loadSecondaryColor() {
        return JSON.parse(localStorage.getItem(this.secondaryColorKey));
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

    saveThemeType(type) {
        localStorage.setItem(this.themeTypeKey, type);
    }

    saveThemedNavbar(enabled) {
        return localStorage.setItem(this.ThemedNavbarKey, JSON.stringify(enabled));
    }

    savePrimaryColor(color) {
        localStorage.setItem(this.primaryColorKey, JSON.stringify(color));
    }

    saveSecondaryColor(color) {
        localStorage.setItem(this.secondaryColorKey, JSON.stringify(color));
    }
}

// ensure single instance
const service = new LocalStorageService();
export default service;