import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./button.component";

import React, { useState } from 'react';

const variants = {
  primary: 'inline-flex items-center gap-2 font-semibold border border-black bg-black text-white hover:bg-[#4B4B55] hover:border-[#4B4B55]',
  secondary: 'inline-flex items-center gap-2 font-semibold border border-black bg-transparent text-black hover:border-[#4B4B55]',
  tertiary: 'inline-flex items-center gap-2 font-semibold border border-transparent text-black hover:text-[#4B4B55]',
  iconLeft: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
  iconRight: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
  disabled: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center disabled:bg-[#C6C6C6] disabled:border-[#C6C6C6] disabled:text-white'
}

const sizes = {
  sm: 'px-6 py-2.5 text-[14px] leading-[18.20px]',
  md: 'px-6 py-3 text-[17px] leading-snug',
  lg: 'px-6 py-5 text-[24px] leading-[31.20px]',
}

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  component: Button,
  args: {
    disabled: false,
    twSize: 'sm'
  },
  argTypes: {
    twSize: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      mapping: {
        sm: sizes.sm,
        md: sizes.md,
        lg: sizes.lg,
      },
    },
  },


};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'CTA Button',
    tw: `${variants.primary}`,
  },
};

export const Secondary: Story = {
  args: {
    label: 'CTA Button',
    tw: `${variants.secondary}`,
  },
};

export const Tertiary: Story = {
  args: {
    label: 'CTA Button',
    tw: `${variants.tertiary}`,
  },
};

export const IconLeft: Story = {
  args: {
    label: 'CTA Button With left icon',
    tw: `${variants.iconLeft}`,
    iconLeft: 'icon-arrow-left-24',
  },
};

export const IconRight: Story = {
  args: {
    label: 'CTA Button With Right icon',
    tw: `${variants.iconRight}`,
    iconRight: 'icon-arrow-right-24',
  },
};

export const Disabled: Story = {
  args: {
    label: 'CTA Button Disabled',
    tw: `${variants.disabled}`,
    disabled: true
  },
};