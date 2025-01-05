import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HamburgerButtonStoryContainer } from './HamburgerButton';

const meta: Meta<typeof HamburgerButtonStoryContainer> = {
  title: 'Components/HamburgerButton',
  component: HamburgerButtonStoryContainer,
  argTypes: {
    toggleSidebar: { action: 'clicked' },
  },
} satisfies Meta<typeof HamburgerButtonStoryContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: false,
    },
};
