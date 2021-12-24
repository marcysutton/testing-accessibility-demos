import React from 'react';

import HomePage from 'workshop2-components/page-home';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Pages/Home',
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const LoggedOut = Template.bind({});
