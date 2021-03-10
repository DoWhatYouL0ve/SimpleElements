import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UncontrolledRating, UncontrolledRatingType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'My components/UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

const callback = action('value is set: ')

export const EmptyRating: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const Rating1: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const Rating2: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const Rating3: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const Rating4: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const Rating5: Story<UncontrolledRatingType> = (args) => <UncontrolledRating defaultValue={5} onChange={callback}/>;


