import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff, UncontrolledOnOffType} from "./UncontrolledOnOff";


export default {
    title: 'My components/UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const OnMode: Story<UncontrolledOnOffType> = (args) => <UncontrolledOnOff defaultOn={true} onChange={action("On was clicked")}/>;
export const OffMode: Story<UncontrolledOnOffType> = (args) => <UncontrolledOnOff defaultOn={false} onChange={action("Off was clicked")}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState( true)
    return <UncontrolledOnOff onChange={() => setValue(!value)} />
}