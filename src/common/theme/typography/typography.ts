export enum TypographyConst {
  flow_title = 'flow_title',
  title_mega_title = 'title_mega_title',
  title_title = 'title_title',
  title_subtitle = 'title_subtitle',
  title_header = 'title_header',
  title_subhead = 'title_subhead',
  body_body_bold = 'body_body_bold',
  body_body_strong = 'body_body_strong',
  body_body_regular = 'body_body_regular',
  body_medium_regular = 'body_medium_regular',
  body_medium_underlined = 'body_medium_underlined',
  body_medium_strong = 'body_medium_strong',
  body_medium_bold = 'body_medium_bold',
  body_small_regular = 'body_small_regular',
  body_small_regular_underlined = 'body_small_regular_underlined',
  body_small_strong = 'body_small_strong',
  body_small_graph_legend = 'body_small_graph_legend',
  body_label = 'body_label',
  body_overline = 'body_overline',
  body_overline_strong = 'body_overline_strong',
}
type TypographyKeys = keyof typeof TypographyConst;

type TypographyValue = {
  text_align: string;
  font_size: string;
  font_weight: string;
  line_height: string;
  letter_spacing: string;
};

export type Typography = {
  [key in TypographyKeys]: TypographyValue;
};

export const loadFonts = (typography: Typography) => {
  const root = document.querySelector(':root') as HTMLElement;
  const typographyKeys = Object.keys(typography) as Array<TypographyKeys>;
  for (const typographyKey of typographyKeys) {
    const typographyValue = typography[typographyKey];
    const { text_align, font_size, font_weight, line_height, letter_spacing } =
      typographyValue;
    root?.style?.setProperty(`${typographyKey}__text_align`, text_align);
    root?.style?.setProperty(`${typographyKey}__font_size`, font_size);
    root?.style?.setProperty(`${typographyKey}__font_weight`, font_weight);
    root?.style?.setProperty(`${typographyKey}__line_height`, line_height);
    root?.style?.setProperty(
      `${typographyKey}__letter_spacing`,
      letter_spacing
    );
  }
};
