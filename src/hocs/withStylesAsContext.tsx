import { createContext } from "react";
import { BannerProps } from "../types/banner";

export interface BannerPropsWithStyles extends BannerProps {
  styles: {
    backgroundColour: string;
  };
}

export const StylesContext = createContext({ backgroundColour: "red" });

export function withStylesAsContext(
  Banner: (props: BannerProps) => JSX.Element
) {
  function Wrapped(props: BannerPropsWithStyles) {
    const { styles, ...bannerProps } = props;

    return (
      <StylesContext.Provider value={styles}>
        <Banner {...bannerProps} />
      </StylesContext.Provider>
    );
  }
  return Wrapped;
}
