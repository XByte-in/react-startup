import { JsonValueType } from "./commonConst";

const STRING_CONSTRUCTOR = "".constructor;
const ARRAY_CONSTRUCTOR = [].constructor;
const OBJECT_CONSTRUCTOR = {}.constructor;
class CommonUtils {
  static onlyUnique(str: string, value: string, index: number) {
    return str.indexOf(value) === index;
  }

  static jsonValueType(value: any): JsonValueType {
    if (value === null) return JsonValueType.null;
    if (value === undefined) return JsonValueType.undefined;
    if (value.constructor === Boolean) return JsonValueType.boolean;
    if (value.constructor === Number) return JsonValueType.number;
    if (value.constructor === STRING_CONSTRUCTOR) return JsonValueType.string;
    if (value.constructor === ARRAY_CONSTRUCTOR) return JsonValueType.array;
    if (value.constructor === OBJECT_CONSTRUCTOR) return JsonValueType.object;
    if (value.constructor === Function) return JsonValueType.function;
    return JsonValueType.none;
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

  static loadColors(colors: any) {
    var root = document.querySelector(":root") as HTMLElement;
    Object.keys(colors).forEach((color_key) => {
      root?.style?.setProperty(color_key, colors[color_key]);
    });
  }
  static loadFonts(fonts: any) {
    var root = document.querySelector(":root") as HTMLElement;
    Object.keys(fonts).forEach((font_key) => {
      Object.keys(fonts[font_key]).forEach((font_sub_key) => {
        root?.style?.setProperty(`${font_key}-${font_sub_key}`, fonts[font_key][font_sub_key]);
      });
    });
  }
}

export default  CommonUtils