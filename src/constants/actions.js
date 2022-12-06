import { faPowerOff, faLock, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const actions = [
  {
    name: 'Lock Screen',
    icon: faLock,
    cmd: 'Rundll32.exe user32.dll,LockWorkStation',
  },
  {
    name: 'Shutdown',
    icon: faPowerOff,
    cmd: 'shutdown /s',
  },
  {
    name: 'Restart',
    icon: faArrowsRotate,
    cmd: 'shutdown /r',
  },
];

export default actions;
