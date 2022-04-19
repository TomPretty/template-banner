import { BannerProps } from "../types/banner";

export interface RenderedBannerProps {
  copy: {
    heading: JSX.Element;
    body: JSX.Element;
  };
}

export function withRenderedProps(
  Banner: (props: RenderedBannerProps) => JSX.Element
) {
  function Wrapped({ copy }: BannerProps) {
    const heading = (
      <header>
        <h2>{copy.heading}</h2>
      </header>
    );
    const body = <p>{copy.body}</p>;

    return <Banner copy={{ heading, body }} />;
  }
  return Wrapped;
}
