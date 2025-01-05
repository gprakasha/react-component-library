import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Readonly<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'BiHome',
        size: 24,
    },
};

export const Calendar: Story = {
    args: {
        name: 'BiCalendar',
        size: 64,
    },
};