import {
  VALUE_TYPE,
  ARRAY_CONSTRUCTOR,
  OBJECT_CONSTRUCTOR,
  STRING_CONSTRUCTOR,
} from "./commonConstants";

export class CommonUtils {
  static onlyUnique(str: string, value: string, index: number) {
    return str.indexOf(value) === index;
  }

  static jsonValueType(value: any): VALUE_TYPE {
    if (value === null) return VALUE_TYPE.NULL;
    if (value === undefined) return VALUE_TYPE.UNDEFINED;
    if (value.constructor === Boolean) return VALUE_TYPE.BOOL;
    if (value.constructor === Number) return VALUE_TYPE.NUMBER;
    if (value.constructor === STRING_CONSTRUCTOR) return VALUE_TYPE.STRING;
    if (value.constructor === ARRAY_CONSTRUCTOR) return VALUE_TYPE.ARRAY;
    if (value.constructor === OBJECT_CONSTRUCTOR) return VALUE_TYPE.OBJECT;
    if (value.constructor === Function) return VALUE_TYPE.FUNCTION;
    return VALUE_TYPE.NONE;
  }

  static loadScript(
    eleTag: string,
    eleId: string,
    jsSrcPath: string,
    onLoad: () => void,
    onError: () => void
  ) {
    const script = document.createElement(eleTag) as HTMLScriptElement;
    script.id = eleId;
    script.src = jsSrcPath;
    script.async = true;
    script.onload = onLoad;
    script.onerror = onError;
    document.querySelector("body")?.appendChild(script);
  }

  static unloadScript(eleId: string) {
    const element = document.getElementById(eleId) as Node;
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
