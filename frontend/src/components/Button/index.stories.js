import CustomButton from "./index";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <CustomButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Start",
};