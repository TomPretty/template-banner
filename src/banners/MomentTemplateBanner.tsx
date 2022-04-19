import {
  RenderedBannerProps,
  withRenderedProps,
} from "../hocs/withRenderedProps";

// ---- Component ---- //

function MomentTemplateBanner({ copy, styles }: RenderedBannerProps) {
  return (
    <article style={{ backgroundColor: styles?.backgroundColour }}>
      {copy.heading}

      {copy.body}
    </article>
  );
}

// ---- Exports ---- //

const wrapped = withRenderedProps(MomentTemplateBanner);
export { wrapped as MomentTemplateBanner };
