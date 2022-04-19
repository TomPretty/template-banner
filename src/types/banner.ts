export interface BannerStyles {
  backgroundColour: string;
}
export interface BannerProps {
  copy: {
    heading: string;
    body: string;
  };
  styles?: BannerStyles;
}
