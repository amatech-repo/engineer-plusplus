import Card from './index';

// interface CardProps {
//   title: string;
//   totalStudyTime: number;
//   tag: string;
// }

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    
};

const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});