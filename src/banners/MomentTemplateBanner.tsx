import { useContext } from "react";
import {
  RenderedBannerProps,
  withRenderedProps,
} from "../hocs/withRenderedProps";
import {
  StylesContext,
  withStylesAsContext,
} from "../hocs/withStylesAsContext";

// ---- Component ---- //

function MomentTemplateBanner({ copy }: RenderedBannerProps) {
  const styles = useContext(StylesContext);

  return (
    <article style={{ backgroundColor: styles.backgroundColour }}>
      {copy.heading}

      {copy.body}
    </article>
  );
}

// ---- Exports ---- //

const wrapped = withStylesAsContext(withRenderedProps(MomentTemplateBanner));
export { wrapped as MomentTemplateBanner };
