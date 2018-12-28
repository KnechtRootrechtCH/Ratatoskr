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
  @observable themedNavbar = false;

  @observable defaultPrimary = amber;
  @observable defaultSecondary = indigo;
  @observable defaultType = 'dark';

  constructor () {
    this.setDefaultTheme();

    const type = LocalStorageService.loadThemeType();
    if (type) {
      this.type = type;
    }

    this.themedNavbar = LocalStorageService.loadThemedNavbar();

    const primary = LocalStorageService.loadPrimaryColor();
    if (primary && primary['500']) {
      this.primary = primary;
    }

    const secondary = LocalStorageService.loadSecondaryColor();
    if (secondary && secondary['500']) {
      this.secondary = secondary;
    }

    this.applyTheme();
  }

  @action setDefaultTheme() {
    this.setType(this.defaultType);
    this.setPrimary(this.defaultPrimary);
    this.setSecondary(this.defaultSecondary);
  }

  @action setType(type) {
    this.type = type;
  }

  @action setThemedNavbar(enabled) {
    this.themedNavbar = enabled;
    LocalStorageService.saveThemedNavbar(this.themedNavbar);
  }

  @action setPrimary(color) {
    this.primary = color;
  }

  @action setSecondary(color) {
    this.secondary = color;
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