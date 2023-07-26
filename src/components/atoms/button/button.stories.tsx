import type { Meta, StoryObj } from '@storybook/react';
import { TopicButton } from "srmg-dev-ui-003";
import React, { useState } from 'react';

const variants = {
<<<<<<< HEAD
    primary: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex items-center gap-2 font-semibold border border-black bg-black text-white hover:bg-[#4B4B55] hover:border-[#4B4B55]',
    secondary: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex items-center gap-2 font-semibold border border-black bg-transparent text-black hover:border-[#4B4B55]',
    tertiary: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex items-center gap-2 font-semibold border border-transparent text-black hover:text-[#4B4B55]',
    iconLeft: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
    iconRight: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex flex-row-reverse gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
    disabled: 'px-6 py-2.5 text-[14px] leading-[18.20px] inline-flex flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center disabled:bg-[#C6C6C6] disabled:border-[#C6C6C6] disabled:text-white',
    selected: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center disabled:bg-[#C6C6C6] disabled:border-[#C6C6C6] disabled:text-white'
}
const isDisbaled = (tw:any, disabled:any) => {
    if(disabled == true){
        return `${tw} disabled:bg-[#eeeeee]`;
    }
    else return tw
=======
  primary: 'inline-flex items-center gap-2 font-semibold border border-black bg-[#2e3438] text-white hover:bg-[#4B4B55] hover:border-[#4B4B55]',
  secondary: 'inline-flex items-center gap-2 font-semibold border border-black bg-transparent text-black hover:border-[#4B4B55]',
  tertiary: 'inline-flex items-center gap-2 font-semibold border border-transparent text-black hover:text-[#4B4B55]',
  iconLeft: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
  iconRight: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center',
  disabled: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center disabled:bg-[#C6C6C6] disabled:border-[#C6C6C6] disabled:text-white',
  selected: 'inline-flex gap-2 font-semibold border border-black bg-black text-white justify-center items-center disabled:bg-[#C6C6C6] disabled:border-[#C6C6C6] disabled:text-white'
>>>>>>> 3ac95f841580a43f1badf81653bdcc8113f80eca
}

const meta: Meta<typeof TopicButton> = {
    component: TopicButton,
    title: 'Atoms/TopicButton',
    tags: ['autodocs'],
    args: {
        type: 'button',
        disabled: false,
        icon: '',
        size: '',
    },
    argTypes: {
        size: {
            name: 'iconSize',
            control: 'number'
        }
    },
    render: (args) => {
        const {tw, disabled} = args;
        const checkResutl = isDisbaled(tw,disabled)
        return <TopicButton {...args} tw={checkResutl}/>
    },
};

export default meta;
type Story = StoryObj<typeof TopicButton>;

export const Primary: Story = {
    args: {
        topicName: 'CTA Button',
        tw: variants.primary,
    },
};

export const Secondary: Story = {
    args: {
        topicName: 'CTA Button',
        tw: variants.secondary,
    },
};

export const Tertiary: Story = {
    args: {
        topicName: 'CTA Button',
        tw: variants.tertiary,
    },
};

export const icon: Story = {
    args: {
        topicName: 'CTA Button With left icon',
        tw: variants.iconLeft,
        icon: 'icon icon-arrow-left-24',
    },
};

export const IconRight: Story = {
    args: {
        topicName: 'CTA Button With Right icon',
        tw: variants.iconRight,
        icon: 'icon icon-arrow-right-24',
    },
};