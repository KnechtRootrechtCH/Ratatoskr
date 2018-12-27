import {observable, action} from 'mobx';

import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';
//import indigo from'@material-ui/core/colors/indigo';

class ThemeStore {
  @observable theme = {};

  constructor () {
    this.setDefaultTheme()
  }

  @action setDefaultTheme() {
    const defaultTheme = createMuiTheme({
      palette: {
        typography: {
          useNextVariants: true,
        },
        type: 'dark',
        primary: amber,
        secondary: red,
      },
    });
    this.setTheme(defaultTheme);
  }

  @action setTheme(theme) {
    console.debug("ThemeStore.setTheme() : ", theme);
    this.theme = theme;
  }
}

// ensure single instance
const store = new ThemeStore();
export default store;