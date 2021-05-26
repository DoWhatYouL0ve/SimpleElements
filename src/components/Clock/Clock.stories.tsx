import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {Clock} from "./Clock";



export default {
    title: 'My components/Clock',
    component: Clock,
} as Meta;


export const BaseExample = () => {
    return <Clock />
}


