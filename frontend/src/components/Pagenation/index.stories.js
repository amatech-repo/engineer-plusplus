import Pagination from "./index";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: {
        type: "number",
      },
    },
    onPageChange: {
      action: "onPageChange",
    },
    currentPage: {
      control: {
        type: "number",
      }
    }
  },
};

const Template = (args) => <Pagination {...args} />;
export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  totalPages: 10,
  currentPage: 5,
};

export const LastPage = Template.bind({});
LastPage.args = {
  totalPages: 10,
  currentPage: 10,
};