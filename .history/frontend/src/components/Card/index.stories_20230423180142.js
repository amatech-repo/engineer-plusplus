import Card from './index';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});