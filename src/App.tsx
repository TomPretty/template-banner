import React from "react";
import { Banner } from "./banners/Banner";
import { MomentTemplateBanner } from "./banners/MomentTemplateBanner";

function App() {
  return (
    <div>
      <Banner
        copy={{ heading: "This is a banner", body: "Give us lots of money" }}
      />

      <MomentTemplateBanner
        copy={{
          heading: "This is an investigations moment banner",
          body: "Give us lots of money",
        }}
        styles={{ backgroundColour: "red" }}
      />

      <MomentTemplateBanner
        copy={{
          heading: "This is an australia moment banner",
          body: "Give us lots of money",
        }}
        styles={{ backgroundColour: "orange" }}
      />
    </div>
  );
}

export default App;
