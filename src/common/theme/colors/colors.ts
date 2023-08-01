export enum Colors {
  'color-accent' = 'color-accent',
  'color-accent-hover' = 'color-accent-hover',
  'color-dark-900' = 'color-dark-900',
  'color-dark-800' = 'color-dark-800',
  'color-dark-700' = 'color-dark-700',
  'color-dark-600' = 'color-dark-600',
  'color-base' = 'color-base',
  'color-light-400' = 'color-light-400',
  'color-light-300' = 'color-light-300',
  'color-light-200' = 'color-light-200',
  'color-light-100' = 'color-light-100',
  'color-surface' = 'color-surface',
  'color-background' = 'color-background',
  'color-white' = 'color-white',
  'color-black' = 'color-black',
  'color-logo-purple' = 'color-logo-purple',
  'color-logo-blue' = 'color-logo-blue',
  'color-logo-green' = 'color-logo-green',
  'color-logo-light-green' = 'color-logo-light-green',
  'color-additional-warning' = 'color-additional-warning',
  'color-additional-error' = 'color-additional-error',
  'color-additional-link' = 'color-additional-link',
  'color-additional-info' = 'color-additional-info',
  'color-additional-caution' = 'color-additional-caution',
  'color-additional-success' = 'color-additional-success',
  'color-overlay-dark' = 'color-overlay-dark',
  'gradient-1-color-1' = 'gradient-1-color-1',
  'gradient-1-color-2' = 'gradient-1-color-2',
  'gradient-2-color-1' = 'gradient-2-color-1',
  'gradient-2-color-2' = 'gradient-2-color-2',
  'gradient-glass-color-1' = 'gradient-glass-color-1',
  'gradient-glass-color-2' = 'gradient-glass-color-2',
  'gradient-glass-color-3' = 'gradient-glass-color-3',
  'gradient-glass-error-color-1' = 'gradient-glass-error-color-1',
  'gradient-glass-error-color-2' = 'gradient-glass-error-color-2',
  'gradient-glass-error-color-3' = 'gradient-glass-error-color-3',
}

type ColorsKeys = keyof typeof Colors;

type ColorsConfig = {
  [key in ColorsKeys]: string;
};

export const loadColors = (colors: ColorsConfig) => {
  const root = document.querySelector(':root') as HTMLElement;
  const colorsKeys = Object.keys(colors) as Array<ColorsKeys>;
  for (const colorsKey of colorsKeys) {
    const colorValue: string = colors[colorsKey];
    root?.style?.setProperty(`${colorsKey}`, colorValue);
  }
};
