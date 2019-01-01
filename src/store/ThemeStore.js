import {observable, action} from 'mobx';

import LocalStorageService from '../service/LocalStorageService';

import { createMuiTheme } from '@material-ui/core/styles';
import {red, pink, purple, deepPurple} from '@material-ui/core/colors';
import {indigo, blue, lightBlue, cyan} from '@material-ui/core/colors';
import {teal, green, lightGreen, lime} from '@material-ui/core/colors';
import {yellow, amber, orange, deepOrange} from '@material-ui/core/colors';
import {grey, blueGrey} from '@material-ui/core/colors';

class ThemeStore {
  @observable colors = [
    red, pink, purple, deepPurple,
    indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime,
    yellow, amber, orange, deepOrange,
    grey, blueGrey];

  @observable theme = {};
  @observable primary = {};
  @observable secondary = {};
  @observable type = '';

  @observable controlsColor = 'inherit';

  @observable navbarPosition = 'bottom';
  @observable navbarColor = 'default';

  @observable defaultPrimary = amber;
  @observable defaultSecondary = indigo;
  @observable defaultType = 'dark';

  constructor () {
    this.setDefaultTheme();

    const primary = LocalStorageService.loadPrimaryColor();
    if (primary && primary['500']) {
      this.primary = primary;
    }

    const secondary = LocalStorageService.loadSecondaryColor();
    if (secondary && secondary['500']) {
      this.secondary = secondary;
    }

    const type = LocalStorageService.loadThemeType();
    if (type) {
      this.type = type;
    }

    const controlsColor = LocalStorageService.loadControlsColor();
    if (controlsColor) {
      this.controlsColor = controlsColor;
    }

    const navbarPosition = LocalStorageService.loadNavbarPosition();
    if (navbarPosition) {
      this.navbarPosition = navbarPosition;
    }

    const navbarColor = LocalStorageService.loadNavbarColor();
    if (navbarColor) {
      this.navbarColor = navbarColor;
    }

    this.applyTheme();
  }

  @action setDefaultTheme() {
    this.setType(this.defaultType);
    this.setPrimary(this.defaultPrimary);
    this.setSecondary(this.defaultSecondary);
  }

  @action setPrimary(color) {
    this.primary = color;
  }

  @action setSecondary(color) {
    this.secondary = color;
  }

  @action setType(type) {
    this.type = type;
  }

  @action setControlsColor(value) {
    this.controlsColor = value;
    LocalStorageService.saveControlsColor(value);
  }

  @action setNavbarPosition(value) {
    this.navbarPosition = value;
    LocalStorageService.saveNavbarPosition(value);
  }

  @action setNavbarColor(value) {
    this.navbarColor = value;
    LocalStorageService.saveNavbarColor(value);
  }

  @action applyTheme() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
        subtitle1: {
          textTransform: 'uppercase',
        },
        caption: {
          textTransform: 'uppercase',
        },
      },
      palette: {
        type: this.type,
        primary: this.primary,
        secondary: this.secondary,
      },
    });
    console.debug("ThemeStore.applyTheme() : ", theme);
    this.theme = theme;
    LocalStorageService.saveThemeType(this.type);
    LocalStorageService.savePrimaryColor(this.primary);
    LocalStorageService.saveSecondaryColor(this.secondary);
  }
}

// ensure single instance
const store = new ThemeStore();
export default store;