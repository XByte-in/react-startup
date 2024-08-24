export default class Environment {
  static readonly ENV = import.meta.env.VITE_ENV;
  static readonly GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  static readonly CLOUD_HOST = import.meta.env.VITE_CLOUD_HOST;
}
