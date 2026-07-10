const { spawn } = require('child_process');
const child = spawn('node', ['node_modules/.bin/vite', '--host', '0.0.0.0', '--port', '5173'], {
  cwd: '/tmp/cc-agent/67934804/project',
  stdio: 'inherit',
  detached: true,
});
child.unref();
console.log('Dev server started on PID', child.pid);
