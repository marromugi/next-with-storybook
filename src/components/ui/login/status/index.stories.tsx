import { LoginHandler } from '../../../../test/server/handlers/login';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { LoginStatus } from ".";

export default {
    title: 'msw/Login/Status',
    component: LoginStatus,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {}
} as ComponentMeta<typeof LoginStatus>;

export const Success: ComponentStoryObj<typeof LoginStatus> = {
    name: 'Success',
    args: {},
    parameters: {
      msw: {
        handlers: [LoginHandler.success()],
      },
    },
  }

export const Failed: ComponentStoryObj<typeof LoginStatus> = {
    name: 'Failed',
    args: {},
    parameters: {
      msw: {
        handlers: [LoginHandler.failed()],
      },
    },
  }