
class LocalStorageService {
    serverKey = 'ratatoskr.server';
    portKey = 'ratatoskr.port';
    tabKey = 'ratatoskr.tab';
    themeTypeKey = 'ratatoskr.themeType';
    ThemedNavbarKey = 'ratatoskr.ThemedNavbar';
    primaryColorKey = 'ratatoskr.primaryColor';
    secondaryColorKey = 'ratatoskr.secondaryColor';
    bottomNavbarKey = 'ratatoskr.bottomNavbar';
    hideNavbarKey = 'ratatoskr.hideNavbar';

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

    loadBottomNavbar() {
        return JSON.parse(localStorage.getItem(this.bottomNavbarKey));
    }

    loadHideNavbar() {
        return JSON.parse(localStorage.getItem(this.hideNavbarKey));
    }

    saveServer(value) {
        localStorage.setItem(this.serverKey, value);
    }

    savePort(value) {
        localStorage.setItem(this.portKey, value);
    }

    saveTab(value) {
        localStorage.setItem(this.tabKey, value);
    }

    saveThemeType(value) {
        localStorage.setItem(this.themeTypeKey, value);
    }

    saveThemedNavbar(value) {
        return localStorage.setItem(this.ThemedNavbarKey, JSON.stringify(value));
    }

    savePrimaryColor(value) {
        localStorage.setItem(this.primaryColorKey, JSON.stringify(value));
    }

    saveSecondaryColor(value) {
        localStorage.setItem(this.secondaryColorKey, JSON.stringify(value));
    }

    saveBottomNavbar(value) {
        localStorage.setItem(this.bottomNavbarKey, JSON.stringify(value));
    }

    saveHideNavbar(value) {
        localStorage.setItem(this.hideNavbarKey, JSON.stringify(value));
    }
}

// ensure single instance
const service = new LocalStorageService();
export default service;