import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * ios com Emulador: localhost
 * ios com fisico: IP da maquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com fisico: 10.0.3.2 (Genymotion)
 */