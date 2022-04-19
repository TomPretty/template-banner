import {
  RenderedBannerProps,
  withRenderedProps,
} from "../hocs/withRenderedProps";

// ---- Component ---- //

function Banner({ copy }: RenderedBannerProps) {
  return (
    <article>
      {copy.heading}

      {copy.body}
    </article>
  );
}

// ---- Exports ---- //

const wrapped = withRenderedProps(Banner);
export { wrapped as Banner };
