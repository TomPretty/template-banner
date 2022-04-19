import { BannerProps } from "../types/banner";
import { MomentTemplateBanner } from "./MomentTemplateBanner";

// ---- Component ---- //

export function AusMomentBanner(props: BannerProps) {
  const styles = {
    backgroundColour: "orange",
  };

  return <MomentTemplateBanner {...props} styles={styles} />;
}
