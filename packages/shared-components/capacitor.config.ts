import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cam_poc.shared_components',
  appName: 'Shared Components POC',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
