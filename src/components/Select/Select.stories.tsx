import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";



export default {
    title: 'My components/Select',
    component: Select,
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;
export const WithSetValueModeChanging:Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState( '2')
    return <Select {...args} onChange={setValue} value={value} />
}

WithSetValueModeChanging.args = {
    items: [{title: 'Valodos', value: '1'}, {title: 'Dimych', value: '2'}, {title: 'Bob', value: '3' }]
}

export const WithoutSetValueModeChanging:Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState( null)
    return <Select {...args} onChange={setValue} value={value}/>
}
WithoutSetValueModeChanging.args = {
    items: [{title: 'Valodos', value: '1'}, {title: 'Dimych', value: '2'}, {title: 'Bob', value: '3'}]
}




