import { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from './styledButton';

const variants = {
  flat: {
    overflow: '',
    textOverflow: '',
    whiteSpace: '',
  },
  fold: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

type TextContentProps = {
    variant: keyof typeof variants
}

const Container = styled.div<TextContentProps>`
    ${({variant}) => {
        const style = variants[variant];

        return css`
            overflow: ${style.overflow};
            text-overflow: ${style.textOverflow};
            white-space: ${style.whiteSpace};
        `
    }}
    
    font-size: 1rem;
    padding: 5px;
    line-height: 30px;
    width: 90%;
`

const TextContents = ({contents}) => {
    const [fold, setFold] = useState(false);

    return (
        <div className="roup relative flex justify-between items-center space-x-4">
            <Container variant={fold ? 'fold' : 'flat'}>
                {contents}
            </Container>
            <StyledButton variant="primary" onClick={() => {setFold(!fold)}}>{fold ? '펼치기' : '접기'}</StyledButton>
        </div>
    )
}

export default TextContents;
