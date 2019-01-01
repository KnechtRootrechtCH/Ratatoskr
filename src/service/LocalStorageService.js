
class LocalStorageService {
    // Connection
    serverKey = 'ratatoskr.server';
    portKey = 'ratatoskr.port';

    // Theme
    themeTypeKey = 'ratatoskr.themeType';
    primaryColorKey = 'ratatoskr.primaryColor';
    secondaryColorKey = 'ratatoskr.secondaryColor';

    //Advanced Mode
    advancedModeKey = 'ratatoskr.advancedMode';

    // Navigation
    navigationModeKey = 'ratatoskr.navigationMode';
    navbarPositionKey = 'ratatoskr.navbarPosition';
    navbarColorKey = 'ratatoskr.navbarColor';

    // Controls
    controlsColorKey = 'ratatoskr.controlsColor';

    loadServer() {
        return localStorage.getItem(this.serverKey);
    }

    loadPort() {
        return localStorage.getItem(this.portKey);
    }

    loadThemeType() {
        return localStorage.getItem(this.themeTypeKey);
    }

    loadAdvancedMode() {
        return JSON.parse(localStorage.getItem(this.advancedModeKey));
    }

    loadNavigationMode() {
        return localStorage.getItem(this.navigationModeKey);
    }

    loadControlsColor() {
        return localStorage.getItem(this.controlsColorKey);
    }

    loadPrimaryColor() {
        return JSON.parse(localStorage.getItem(this.primaryColorKey));
    }

    loadSecondaryColor() {
        return JSON.parse(localStorage.getItem(this.secondaryColorKey));
    }

    loadNavbarPosition() {
        return localStorage.getItem(this.navbarPositionKey);
    }

    loadNavbarColor() {
        return localStorage.getItem(this.navbarColorKey);
    }

    saveServer(value) {
        localStorage.setItem(this.serverKey, value);
    }

    savePort(value) {
        localStorage.setItem(this.portKey, value);
    }

    saveThemeType(value) {
        localStorage.setItem(this.themeTypeKey, value);
    }

    saveAdvancedMode(value) {
        localStorage.setItem(this.advancedModeKey, JSON.stringify(value));
    }

    saveNavigationMode(value) {
        localStorage.setItem(this.navigationModeKey, value);
    }

    saveControlsColor(value) {
        localStorage.setItem(this.controlsColorKey, value);
    }

    savePrimaryColor(value) {
        localStorage.setItem(this.primaryColorKey, JSON.stringify(value));
    }

    saveSecondaryColor(value) {
        localStorage.setItem(this.secondaryColorKey, JSON.stringify(value));
    }

    saveNavbarPosition(value) {
        localStorage.setItem(this.navbarPositionKey, value);
    }

    saveNavbarColor(value) {
        localStorage.setItem(this.navbarColorKey, value);
    }
}

// ensure single instance
const service = new LocalStorageService();
export default service;