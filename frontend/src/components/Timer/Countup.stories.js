import Countup from './Countup';

export default {
  title: 'Components/Countup',
  component: Countup,
  argTypes: {
    hour: { control: 'number' },
    minute: { control: 'number' },
    second: { control: 'number' },
  },
};

const Template = (args) => <Countup {...args} />;
export const Default = Template.bind({});
Default.args = {
  hour: 0,
  minute: 0,
  second: 0,
};