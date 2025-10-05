const { spawn } = require('child_process');

let serverProcess;

module.exports = async function globalSetup() {
  console.log('Запуск сервера...');
  serverProcess = spawn('npm', ['run', 'start'], {
    stdio: 'inherit',
    shell: true
  });
  
  console.log('Ждем запуска сервера...');
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log('Сервер должен быть запущен');
}

module.exports.globalTeardown = async function globalTeardown() {
  console.log('Остановка сервера...');
  if (serverProcess) {
    serverProcess.kill();
  }
}