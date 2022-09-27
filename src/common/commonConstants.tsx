export const STRING_CONSTRUCTOR = "".constructor;
export const ARRAY_CONSTRUCTOR = [].constructor;
export const OBJECT_CONSTRUCTOR = {}.constructor;

export enum VALUE_TYPE {
  NONE,
  NULL,
  UNDEFINED,
  BOOL,
  NUMBER,
  STRING,
  ARRAY,
  OBJECT,
  FUNCTION,
}
