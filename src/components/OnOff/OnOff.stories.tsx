import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {OnOff, OnOFFType} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'My components/OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const OnMode: Story<OnOFFType> = (args) => <OnOff  on={true} onChange={action("On was clicked")}/>;
export const OffMode: Story<OnOFFType> = (args) => <OnOff  on={false} onChange={action("Off was clicked")}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState( true)
    return <OnOff on={value} onChange={() => setValue(!value)} />
}