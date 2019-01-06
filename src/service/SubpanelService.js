import AccessSubpanel from '../components/subpanels/AccessSubpanel'
import IfcsSubpanel from '../components/subpanels/IfcsSubpanel'

import DoorIcon from 'mdi-material-ui/Glassdoor'

export default class SubpanelService {
    static subpanels = [
        {
            key: 'access',
            name: 'Access Control',
            shortName: 'Access',
            header: null,
            showActions: false,
            icon: null,
            iconComponent: DoorIcon,
            component: AccessSubpanel,
        },
        {
            key: 'ifcs',
            name: 'I.F.C.S',
            shortName: 'IFCS',
            header: 'Flight Control Systems',
            showActions: false,
            icon: 'memory',
            iconComponent: null,
            component: IfcsSubpanel,
        },
    ]

    static get = (key) => {
        let result = null;
        if (!key) {
            return result;
        }
        SubpanelService.subpanels.forEach(subpanel => {
            if (subpanel.key === key) {
                result = subpanel;
            }
        });
        return result;
    }
}