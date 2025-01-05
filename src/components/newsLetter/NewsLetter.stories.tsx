import type { Meta, StoryObj } from '@storybook/react';

import NewsLetter from './NewsLetter';

const meta = {
  component: NewsLetter,
} satisfies Meta<typeof NewsLetter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Subscribe to our newsletter',
    description: 'Get the latest news and updates from us',
    inputBoxPlaceholder: 'Enter your email address',
    consentMessage: 'I agree to the terms and conditions',
  },
};