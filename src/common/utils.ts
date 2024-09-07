class Utils {
  static convertBytes = (bytes: number) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length) {
      bytes /= 1024;
      i++;
    }
    return bytes.toFixed(2) + ' ' + units[i];
  };

  static loadScript = (
    eleTag: string,
    eleId: string,
    jsSrcPath: string,
    onLoad: () => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => void
  ) => {
    const script = document.createElement(eleTag) as HTMLScriptElement;
    script.id = eleId;
    script.src = jsSrcPath;
    script.async = true;
    script.onload = onLoad;
    script.onerror = onError;
    document.querySelector('body')?.appendChild(script);
  };

  static unloadScript = (eleId: string) => {
    const element = document.getElementById(eleId) as Node;
    element?.parentNode?.removeChild(element);
  };

  static setCookie = (
    name: string,
    value: string | number,
    seconds: number
  ) => {
    let expires = '';
    if (seconds) {
      const date = new Date();
      console.log(date);
      date.setTime(date.getTime() + seconds * 1000);
      console.log(date);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  };
  static getCookie = (name: string) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  static deleteCookie = (name: string) => {
    document.cookie = name + '=; expires=' + new Date(0).toUTCString();
  };
}
export default Utils;
