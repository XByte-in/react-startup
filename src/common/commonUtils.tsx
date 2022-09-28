const STRING_CONSTRUCTOR = "".constructor;
const ARRAY_CONSTRUCTOR = [].constructor;
const OBJECT_CONSTRUCTOR = {}.constructor;
import { ValueType } from "./commonConstants";

export class CommonUtils {
  static onlyUnique(str: string, value: string, index: number) {
    return str.indexOf(value) === index;
  }

  static jsonValueType(value: any): ValueType {
    if (value === null) return ValueType.null;
    if (value === undefined) return ValueType.undefined;
    if (value.constructor === Boolean) return ValueType.boolean;
    if (value.constructor === Number) return ValueType.number;
    if (value.constructor === STRING_CONSTRUCTOR) return ValueType.string;
    if (value.constructor === ARRAY_CONSTRUCTOR) return ValueType.array;
    if (value.constructor === OBJECT_CONSTRUCTOR) return ValueType.object;
    if (value.constructor === Function) return ValueType.function;
    return ValueType.none;
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
