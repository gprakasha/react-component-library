import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        logo: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'John Doe',
        size: 'medium',
    },
};

export const NoLogo: Story = {
    args: {
        name: 'John Doe',
        styleClass: 'bg-primary text-white shadow',
        size: 'medium',
    },
};

export default meta;