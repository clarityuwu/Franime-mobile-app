import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  appId: 'io.franime.clarity',
  appName: 'FrAnime',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
