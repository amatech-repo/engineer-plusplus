import TimerButtons from "./TimerButtons";

export default {
  title: "Components/TimerButtons",
  component: TimerButtons,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <TimerButtons {...args} />;
export const Default = Template.bind({});