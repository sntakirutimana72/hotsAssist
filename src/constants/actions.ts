import {
  faArrowsRotate,
  faLock,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface actionInterface {
  name: string;
  cmd: string;
  icon: IconProp;
}

export const actions: actionInterface[] = [
  {
    name: 'Lock Screen',
    cmd: 'Rundll32.exe user32.dll,LockWorkStation',
    icon: faLock,
  },
  {
    name: 'Shutdown',
    cmd: 'shutdown /s',
    icon: faPowerOff,
  },
  {
    name: 'Reboot',
    cmd: 'shutdown /r',
    icon: faArrowsRotate,
  },
];
