import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionType} from "./Accordion";


export default {
    title: 'My components/Accordion',
    component: Accordion,
} as Meta;

export const CollapsedMode: Story<AccordionType> = (args) => <Accordion  title={'-- Menu --'} onChange={action("Accordion mode collapsed")} collapsed={true}/>;
export const UncollapsedMode: Story<AccordionType> = (args) => <Accordion title={'-- Menu --'} onChange={action("Accordion mode Uncollapsed")} collapsed={false}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState( true)
    return <Accordion title={'-- Menu --'} collapsed={value} onChange={() => setValue(!value)}/>
}