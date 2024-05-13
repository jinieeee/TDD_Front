import {Meta} from "@storybook/react";
import {Tab, Tabs} from "../components/atoms/tabs";

const meta:Meta<typeof Tabs> = {
    title: 'Tabs',
    component: Tabs,
}

export default meta;

export const tabs = (props) => {
    return <Tabs variant="fitted">
        <Tab label="Tab 1">
            <p>Content for Tab 1</p>
        </Tab>
        <Tab label="Tab 2">
            <p>Content for Tab 2</p>
        </Tab>
        <Tab label="Tab 3">
            <p>Content for Tab 3</p>
        </Tab>
    </Tabs>
}
