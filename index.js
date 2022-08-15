const { spawn } = require('child_process');
const cat = spawn('cat', ['input']);

const out = {
  stdout: '',
  stderr: '',
};

cat.stdout.on('data', (data) => {
  const strData = data.toString();
  out.stdout = out.stdout + strData;
});

cat.stderr.on('data', (data) => {
  console.error(data);
});

cat.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
