import type { Meta, StoryObj } from '@storybook/react';
import { SocialButton } from "./socialButton.component";

const meta: Meta<typeof SocialButton> = {
    title: 'Atoms/Social Button',
    component: SocialButton,
    args: {
        disabled: false
    },

};

export default meta;
type Story = StoryObj<typeof SocialButton>;

export const Primary: Story = {
    name: 'Google',
    args: {
        label: 'Google',
        tw: 'py-2.5 px-6 inline-flex gap-3 items-center rounded-lg border border-gray-300 text-md font-bold leading-normal',
        icon: 'icon-google'
    },
};

export const Secondary: Story = {
    name: 'Facebook',
    args: {
        label: 'Facebook',
        tw: 'py-2.5 px-6 inline-flex gap-3 items-center rounded-lg border border-gray-300 text-md font-bold leading-normal',
        icon: 'icon-facebook'
    },
};

export const Tertiary: Story = {
    name: 'Apple',
    args: {
        label: 'Apple',
        tw: 'py-2.5 px-6 inline-flex gap-3 items-center rounded-lg border border-gray-300 text-md font-bold leading-normal',
        icon: 'icon-facebook'
    },
};
