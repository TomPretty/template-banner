import React from "react";
import { AusMomentBanner } from "./banners/AusMomentBanner";
import { Banner } from "./banners/Banner";
import { MomentTemplateBanner } from "./banners/MomentTemplateBanner";

function App() {
  return (
    <div>
      <Banner
        copy={{ heading: "This is a banner", body: "Give us lots of money" }}
      />

      {/*
        This is an example of how we can use the template banner without having it fully
        hooked up to the tool. We can create a simple wrapper component which just receives 
        the regular BannerProps and renders the MomentTemplateBanner passing in hardcoded
        styles. This wrapper component can be setup quickly by a dev and then hooked up
        the the tool following the same process as a regular banner.
      */}
      <AusMomentBanner
        copy={{
          heading: "This is an australia moment banner",
          body: "Give us lots of money",
        }}
      />

      {/*
        This is an example of how we can use the template banner when it's been fully
        hooked up to the tool. The tool can be extended to allow configuring of the 
        `styles` prop. In this case, a client will be able to make a request directly
        for the MomentTemplateBanner and pass in all of the props coming from the RRCP.
        This would mean there is no dev setup required for a moment banner.
      */}
      <MomentTemplateBanner
        copy={{
          heading: "This is an investigations moment banner",
          body: "Give us lots of money",
        }}
        styles={{ backgroundColour: "red" }}
      />
    </div>
  );
}

export default App;
