export type TextSectionProps = {
  header: HeaderProps;
  paragraph: Paragraphprops[];
};
export type HeaderProps = {
  text: string;
  className?: string;
};
export type Paragraphprops = {
  paragraphs: string;
  className?: string;
};
