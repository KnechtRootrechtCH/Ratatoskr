import MenuPanel from '../components/panels/MenuPanel';
import CoreSystemsPanel from '../components/panels/CoreSystemsPanel';
import FlightSystemsPanel from '../components/panels/FlightSystemsPanel';
import SettingsPanel from '../components/panels/SettingsPanel';
import PlaceholderPanel from '../components/panels/PlaceholderPanel';

import FlightIcon from 'mdi-material-ui/Compass'
import ShieldsIcon from 'mdi-material-ui/ShieldAirplane'

export default class PanelService {
    static panels = [
        {
            key: 'systems',
            name: 'Core Systems',
            shortName: 'Core Systems',
            route: '/systems',
            icon: 'blur_circular',
            iconComponent: null,
            tabs: true,
            drawer: true,
            menu: true,
            component: CoreSystemsPanel,
        },
        {
            key: 'flight',
            name: 'Flight & Navigation',
            shortName: 'Flight',
            route: '/flight',
            icon: null,
            iconComponent: FlightIcon,
            tabs: true,
            drawer: true,
            menu: true,
            component: FlightSystemsPanel,
        },
        {
            key: 'power',
            name: 'Power Management',
            shortName: 'Power',
            route: '/power',
            icon: 'battery_charging_full',
            iconComponent: null,
            tabs: true,
            drawer: true,
            menu: true,
            component: PlaceholderPanel,
        },
        {
            key: 'shields',
            name: 'Shield Management',
            shortName: 'Shields',
            route: '/shields',
            icon: null,
            iconComponent: ShieldsIcon,
            tabs: true,
            drawer: true,
            menu: true,
            component: PlaceholderPanel,
        },
        {
            key: 'combat',
            name: 'Targeting & Combat',
            shortName: 'Combat',
            route: '/combat',
            icon: 'gps_fixed',
            iconComponent: null,
            tabs: true,
            drawer: true,
            menu: true,
            component: PlaceholderPanel,
        },
        {
            key: 'industrial',
            name: 'Industrial',
            shortName: 'Industrial',
            route: '/industrial',
            icon: 'wifi_tethering',
            iconComponent: null,
            tabs: false,
            drawer: true,
            menu: true,
            component: PlaceholderPanel,
        },
        {
            key: 'comms',
            name: 'Communications',
            shortName: 'Comms',
            route: '/comms',
            icon: 'headset',
            iconComponent: null,
            tabs: false,
            drawer: true,
            menu: true,
            component: PlaceholderPanel,
        },
        {
            key: 'settings',
            name: 'Settings',
            shortName: 'Settings',
            route: '/settings',
            icon: 'settings',
            iconComponent: null,
            tabs: true,
            drawer: true,
            menu: true,
            component: SettingsPanel,
        },
        {
            key: 'menu',
            name: 'Menu',
            shortName: 'Menu',
            route: '/menu',
            icon: 'home',
            iconComponent: null,
            tabs: false,
            drawer: false,
            menu: false,
            component: MenuPanel,
        },
    ]

    static get = (key) => {
        let result = null;
        if (!key) {
            return result;
        }
        PanelService.panels.forEach(panel => {
            if (panel.key === key) {
                result = panel;
            }
        });
        return result;
    }

}