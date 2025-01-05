import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    price: 50,
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
    isSavedForLater: false,
    discount: 8,
    isLoading: false,
    styleClass: ""
  }
};