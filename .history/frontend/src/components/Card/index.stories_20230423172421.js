import Card from './index';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});