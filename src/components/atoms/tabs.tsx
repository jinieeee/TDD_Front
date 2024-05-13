import styled, {css} from "styled-components";
import {useState} from "react";

const variants = {
    fitted: {
        justifyContent: 'space-between'
    }
} as const

type TabProps = {
    variant: keyof typeof variants
}

const TabContainer = styled.div<TabProps>`
    ${({variant}) => {
        const style = variants[variant];
        
        return css`
            justify-content: ${style.justifyContent};
        `
    }}
    
    display: flex;
    cursor: pointer;
    height: 2rem;
`

const TabDiv = styled.div`
    border: 1px solid #00b3f0;
    display : flex;
    justify-content : center;
    align-items : center;
    text-align: center;
    flex: 1;
    
    &.active {
        background-color: #00b3f0;
        color: white;
    }
`

export const Tab = ({label, ...props}) => {
    return (
    <TabDiv
        className={`tab ${props.activeTab === props.index ? 'active' : ''}`}
        onClick={() => props.onClick(props.index)}
    >
        {label}
    </TabDiv>
    )
}

export const Tabs = ({variant, children}) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (index: number) => {
        setActiveTab(index);
    }

    return (
        <>
            <TabContainer variant={variant}>
                {children.map((child, index: number) => (
                    <Tab
                        key={child.props.label}
                        label={child.props.label}
                        index={index}
                        onClick={changeTab}
                        activeTab={activeTab}
                    >
                    </Tab>
                ))}
            </TabContainer>
            {children.map((child, index: number) =>
                index === activeTab ? child.props.children : null
            )}
        </>
    )
}
