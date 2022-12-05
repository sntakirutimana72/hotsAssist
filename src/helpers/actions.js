const actions = [
  {
    name: "Lock Screen",
    cmd: "Rundll32.exe user32.dll,LockWorkStation"
  },
  {
    name: "Shutdown",
    cmd: "shutdown /s"
  },
  {
    name: "Restart",
    cmd: "shutdown /r"
  },
  {
    name: "Later Shutdown",
    cmd: "shutdown /s /t"
  }
];

export default actions;
