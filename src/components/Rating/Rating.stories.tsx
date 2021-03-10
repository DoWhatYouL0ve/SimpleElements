import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating, RatingType} from "./Rating";


export default {
    title: 'My components/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const EmptyRating: Story<RatingType> = (args) => <Rating value={0} onClick={a => a}/>;
export const Rating1: Story<RatingType> = (args) => <Rating value={1} onClick={a => a}/>;
export const Rating2: Story<RatingType> = (args) => <Rating value={2} onClick={a => a}/>;
export const Rating3: Story<RatingType> = (args) => <Rating value={3} onClick={a => a}/>;
export const Rating4: Story<RatingType> = (args) => <Rating value={4} onClick={a => a}/>;
export const Rating5: Story<RatingType> = (args) => <Rating value={5} onClick={a => a}/>;

/*export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};*/

