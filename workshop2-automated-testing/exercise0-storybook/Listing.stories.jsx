import React from 'react';

import ListingExcerpt from 'components/listing-excerpt';

export default {
  title: 'Components/Listing',
  component: ListingExcerpt,
}

import imageFile from '/.storybook/assets/disneyland.jpg';

const Template = args => <ListingExcerpt {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: {
        listingName: "Disneyland",
        location: "Planet Earth",
        listingType: "Amusement Park",
        excerpt: "The greatest place for families",
        amenities: ["wifi", "food", "tables", "bathrooms"]
    },
    image: imageFile,
};
  
