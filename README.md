# Moment template banner

This repo implements a demo of how we can build a template banner for moments that could eventually be hooked up to the RRCP. The end result is a banner, `MomentTemplateBanner`, that takes additional props that encode all of the styling & customisation of the template. For the purposes of this demo repo that just looks like:

```ts
interface BannerPropsWithStyles extends BannerProps {
  styles: {
    backgroundColour: string;
  };
}
```

The ultimate goal is to have this `MomentTemplateBanner` hooked up to the RRCP. When this has happened, a client could directly request the template banner and render it by passing in the props it has received from SDC:

```tsx
<MomentTemplateBanner
  copy={{
    heading: "This is an investigations moment banner",
    body: "Give us lots of money",
  }}
  styles={{ backgroundColour: "red" }}
/>
```

In the meantime, we can use the template banner by creating thin wrapper components that hardcode the styles and just expect the existing props model:

```tsx
export function AusMomentBanner(props: BannerProps) {
  const styles = {
    backgroundColour: "orange",
  };

  return <MomentTemplateBanner {...props} styles={styles} />;
}
```

These can then be hooked up to the tool following the same process as for any other banner.
