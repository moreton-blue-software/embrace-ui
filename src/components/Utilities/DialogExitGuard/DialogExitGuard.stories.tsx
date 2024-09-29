import { Meta, StoryObj } from "@storybook/react";

import DialogExitGuard from "./DialogExitGuard";

export default {
  title: "Components/Utilities/DialogExitGuard",
  component: DialogExitGuard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    title: "Custom Title",
    message:
      "Custom message for this dialog exit guard has been generated for your reference. You may pass the message you're intending to pass to the user.",
    acceptLabel: "Custom Accept",
    cancelLabel: "Custom Cancel",
    acceptFn: () => {
      alert("Accept action");
    },
    cancelFn: () => {
      alert("Cancel action");
    },
    acceptBtnColor: "#060675",
    acceptButtonProps: {},
    cancelBtnProps: {},
    maxWidth: "sm",
  },
  argTypes: {
    acceptFn: {
      description: "Required: function integrated when accept is clicked",
    },
    cancelFn: {
      description: "Required: function integrated when cancel is clicked",
    },
    acceptButtonProps: {
      description: "SxProps for MUI Button",
    },
    cancelBtnProps: {
      description: "SxProps for MUI Button",
    },
    maxWidth: {
      description: "xs | sm | md | lg | xl",
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof DialogExitGuard>;

type Story = StoryObj<typeof DialogExitGuard>;

export const Default: Story = {};
