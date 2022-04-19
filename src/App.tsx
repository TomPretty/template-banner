import React, { createContext, useContext } from "react";

function App() {
  return (
    <div>
      <Banner
        copy={{ heading: "This is a banner", body: "Give us lots of money" }}
      />

      <TemplateBanner
        copy={{
          heading: "This is an investigations moment banner",
          body: "Give us lots of money",
        }}
        styles={{ backgroundColour: "red" }}
      />

      <TemplateBanner
        copy={{
          heading: "This is an australia moment banner",
          body: "Give us lots of money",
        }}
        styles={{ backgroundColour: "orange" }}
      />
    </div>
  );
}

// ---- Banners ---- //

interface BannerProps {
  copy: {
    heading: string;
    body: string;
  };
}

interface RenderedBannerProps {
  copy: {
    heading: JSX.Element;
    body: JSX.Element;
  };
}

function withRenderedProps(
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

function _Banner({ copy }: RenderedBannerProps) {
  return (
    <article>
      {copy.heading}

      {copy.body}
    </article>
  );
}

const Banner = withRenderedProps(_Banner);

interface BannerPropsWithStyles extends BannerProps {
  styles: {
    backgroundColour: string;
  };
}

const StylesContext = createContext({ backgroundColour: "red" });

function withStylesAsContext(Banner: (props: BannerProps) => JSX.Element) {
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

function _TemplateMomentBanner({ copy }: RenderedBannerProps) {
  const styles = useContext(StylesContext);

  return (
    <article style={{ backgroundColor: styles.backgroundColour }}>
      {copy.heading}

      {copy.body}
    </article>
  );
}

const TemplateBanner = withStylesAsContext(
  withRenderedProps(_TemplateMomentBanner)
);

export default App;
