import React from 'react'

import Slideshow from 'workshop4-components/slideshow/slideshow'

import image1 from "../../../.storybook/assets/disneyland.jpg"
import image2 from "../../../.storybook/assets/barcelona.jpg"
import image3 from "../../../.storybook/assets/prague.jpg"

export default {
  title: 'Components/Slideshow',
  component: Slideshow,
}

// We create a “template” of how args map to rendering
const Template = (args) => <Slideshow {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  images: [{
    src: image1,
    alt: "Disneyland castle",
    caption: "Disneyland"
  },{
    src: image2,
    alt: "A colorful city street",
    caption: "Barcelona"
  },{
    src: image3,
    alt: "Historical buildings with spires",
    caption: "Prague"
  }],
  imageURLs: null
};
