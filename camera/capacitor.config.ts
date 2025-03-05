import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'myapp',
  webDir: 'dist/myapp/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
