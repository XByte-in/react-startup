import {
  ARRAY_CONSTRUCTOR,
  JsonValueType,
  OBJECT_CONSTRUCTOR,
  STRING_CONSTRUCTOR,
} from './const';

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

  static jsonValueType = (value: any): JsonValueType => {
    if (value === null) return JsonValueType.null;
    if (value === undefined) return JsonValueType.undefined;
    if (value.constructor === Boolean) return JsonValueType.boolean;
    if (value.constructor === Number) return JsonValueType.number;
    if (value.constructor === STRING_CONSTRUCTOR) return JsonValueType.string;
    if (value.constructor === ARRAY_CONSTRUCTOR) return JsonValueType.array;
    if (value.constructor === OBJECT_CONSTRUCTOR) return JsonValueType.object;
    if (value.constructor === Function) return JsonValueType.function;
    return JsonValueType.none;
  };

  static isValidURL = (text: string) => {
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    return text.match(urlRegex);
  };
  static isValidEmail = (text: string) => {
    const urlRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return text.match(urlRegex);
  };
  static convertUrlInString = (stringData: string) => {
    const words = stringData.split('\n').join(' ').split(' ');
    const encodeHTML = (text: string) => {
      return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#x27;');
    };
    return words
      .map(word => {
        const encodedWord = encodeHTML(word);
        if (Utils.isValidURL(encodedWord)) {
          return `<a href="${encodedWord}" target="_blank">${encodedWord}</a>`;
        } else if (Utils.isValidEmail(word))
          return `<a href="mailto:${word}">${word}</a>`;
        return word;
      })
      .join(' ');
  };

  static reorderJsonObject = (
    jsonObject: { [key: string]: any },
    ignoreElements?: Array<string>,
    topElements?: Array<string>,
    bottomElements?: Array<string>
  ) => {
    ignoreElements?.forEach(key => {
      delete jsonObject[key];
    });
    const orderedJsonObject: { [key: string]: any } = {};
    topElements?.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(jsonObject, key))
        orderedJsonObject[key] = jsonObject[key];
    });
    Object.keys(jsonObject).forEach(key => {
      if (!topElements?.includes(key) && !bottomElements?.includes(key))
        orderedJsonObject[key] = jsonObject[key];
    });
    bottomElements?.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(jsonObject, key))
        orderedJsonObject[key] = jsonObject[key];
    });
    return orderedJsonObject;
  };
}
export default Utils;
