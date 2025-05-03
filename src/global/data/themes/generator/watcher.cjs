const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const files = [
  './themes/art.cjs',
  './themes/ui.cjs',
];

let time = +new Date();

function myFunction() {
  if (time > +new Date() - 2000) return;

  time = +new Date();

  const cmd = `node ${path.resolve(__dirname, './run.cjs')}`;

  console.log('Running...');
  cp.exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(`=> Error: ${err}`);
      return;
    }
    if (stderr) {
      console.error(`=> stderr: ${stderr}`);
      return;
    }
    console.log(`=> stdout: ${stdout}`);
  });
  console.log('Done!');
}

const run = (() => {
  files.forEach((file) => {
    file = path.join(__dirname, file);

    fs.watch(file, (eventType, filename) => {
      eventType === 'change' && myFunction();
    });
  });
});

run();
