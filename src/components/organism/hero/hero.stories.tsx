import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from "srmg-dev-ui-003";

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Organism/Hero',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: `The Royal Hashemite Court publishes a historical photo from Prince Hussein's wedding`,
    tagline: 'Currently the most read and shared article in Sayidaty! Signup and save the article for future reference.',
    link: '#',
    bgImage:'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=48x48&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
    twTitle:'text-zinc-800 text-[27px] lg:text-[32px] font-bold leading-[38.40px]',
    twTagline: 'text-gray-500 text-[17px] font-light leading-normal',
    twHeroContainer:'flex flex-col',
    twHeroWrapper: 'bg-cover bg-[#DAEDFF] flex items-end md:max-w-[426px] lg:max-w-[708px] h-[812px] md:h-[900px] lg:h-[920px] p-6 md:px-12 md:py-9 lg:px-20 lg:py-14',
  },
};