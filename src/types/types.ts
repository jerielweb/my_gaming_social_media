export interface Button {
  name: string;
  url: string;
  target?: string;
}

export interface Game {
  name: string;
  url: string;
  src?: string;
}

export interface LayoutProps {
  title: string;
  class?: string;
}

export interface ButtonProps {
  href?: string;
  text: string;
  style?: string;
  target?: string;
}