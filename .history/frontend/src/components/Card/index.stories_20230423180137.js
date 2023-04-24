import Card from './index';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});