const { spawn } = require('child_process');
const child = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5173'], {
  stdio: 'inherit',
  detached: true,
});
child.unref();
console.log('Dev server started');
