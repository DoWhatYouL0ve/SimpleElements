import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionType} from "./Accordion";


export default {
    title: 'My components/Accordion',
    component: Accordion,
} as Meta;

// args - are the props. Мы рисуем компоненту с какими то аргументами(пропсами)
const Template: Story<AccordionType> = (args) => <Accordion {...args} />;

export const ModeChanging:Story<AccordionType> = (args) => {
    const [value, setValue] = useState( true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    title: '-- Menu --',
    items: [{title: 'Valodos', value: 1}, {title: 'Dimych', value: 2}, {title: 'Bob', value: 3 }],
    onClick: (value) => {alert("user with Id " + value + " should be happy")}
}


// .bind - creats a copy of the Template function, for template not to be changed
// Now we can create our elements
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: '-- Menu --',
    onChange: action("Accordion mode collapsed"),
    collapsed: true,
    items: [{title: 'Valodos', value: 1}, {title: 'Dimych', value: 2}, {title: 'Bob', value: 3 }],
    onClick: action("some item was clicked")
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    title: '-- Menu --',
    /**
     * An example of comment in Template, also can be used in Type if we determine it in this document
     */
    onChange: action("Accordion mode collapsed"),
    collapsed: false,
    items: [{title: 'Valodos', value: 1}, {title: 'Dimych', value: 2}, {title: 'Bob', value: 3 }],
    onClick: action("some item was clicked")
}


