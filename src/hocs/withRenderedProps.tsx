import { BannerProps, BannerStyles } from "../types/banner";

export interface RenderedBannerProps {
  copy: {
    heading: JSX.Element;
    body: JSX.Element;
  };
  styles?: BannerStyles;
}

export function withRenderedProps(
  Banner: (props: RenderedBannerProps) => JSX.Element
) {
  function Wrapped(props: BannerProps) {
    const { copy, ...otherProps } = props;
    const heading = (
      <header>
        <h2>{copy.heading}</h2>
      </header>
    );
    const body = <p>{copy.body}</p>;

    return <Banner copy={{ heading, body }} {...otherProps} />;
  }
  return Wrapped;
}
