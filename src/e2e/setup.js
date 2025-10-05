const { spawn } = require('child_process');

let serverProcess;

export default async function globalSetup() {
  console.log('Запуск сервера...');
  serverProcess = spawn('npm', ['run', 'start'], {
    stdio: 'inherit',
    shell: true
  });
  
  // Ждем подольше для запуска сервера
  await new Promise(resolve => setTimeout(resolve, 8000));
  console.log('Сервер должен быть запущен');
}

export async function globalTeardown() {
  console.log('Остановка сервера...');
  if (serverProcess) {
    serverProcess.kill();
  }
}