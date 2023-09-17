export default class Environment {
  static readonly ENV = import.meta.env.VITE_ENV;
  static readonly GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
}
