import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from './UserProfile';

const meta = {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Jane Doe',
    logo: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
};