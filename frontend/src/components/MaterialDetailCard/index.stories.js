import MaterialDetailCard from './index';

export default {
  title: 'Components/MaterialDetailCard',
  component: MaterialDetailCard,
};

const Template = (args) => <MaterialDetailCard {...args} />;
export const Default = Template.bind({});
Default.args = {}