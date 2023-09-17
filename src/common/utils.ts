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
}
export default Utils;
