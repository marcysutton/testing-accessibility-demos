import React from 'react';

import ListingExcerpt from 'workshop2-components/listing-excerpt';

import image from "../../.storybook/assets/disneyland.jpg"

export default {
  title: 'Components/ListingExcerpt',
  component: ListingExcerpt,
}

// We create a “template” of how args map to rendering
const Template = (args) => <ListingExcerpt {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  data: {
    listingName: "Disneyland",
    location: "Planet Earth",
    listingType: "Amusement Park",
    excerpt: "The happiest place on Earth",
    amenities: ["wifi", "food", "bathrooms"]
  },
  image: image
};
