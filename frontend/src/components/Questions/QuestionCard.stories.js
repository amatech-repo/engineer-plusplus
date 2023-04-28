import QuestionCard from "./QuestionCard"

// interface Questions {
//   id: string;
//   uId: string;
//   mId: string;
//   title: string;
//   content: string;
//   createdAt: {
//     seconds: number;
//     nanoseconds: number;
//   };
// }

export default {
  title: "Components/Questions/QuestionCard",
  component: QuestionCard,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
    uId: {
      control: {
        type: "text",
      },
    },
    mId: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
    createdAt: {
      control: {
        type: "object",
      },
    },
  },
}

const Template = (args) => <QuestionCard {...args} />
export const Default = Template.bind({})
Default.args = {
  id: "1",
  uId: "1",
  mId: "1",
  title: "How to use React?",
  content: "I am new to React, how do I use it?",
  createdAt: {
    seconds: 1619780400,
    nanoseconds: 0,
  },
}