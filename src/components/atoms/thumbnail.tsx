import styled, {css} from "styled-components";

const variants = {
    large: {
        height: '13rem'
    }
} as const

type ThumbnailProps = {
    variant: keyof typeof variants
}

const ThumbnailContainer = styled.div<ThumbnailProps>`
    ${({variant}) => {
        const style = variants[variant]
        
        return css`
            height: ${style.height};
        `
    }}
    
    border: 1px solid gray;
    align-items: center;
    margin-bottom: 1.75rem;
    border-radius: 1rem;
    overflow: hidden;
`

export const Thumbnail = ({variants, url}) => {
    return (
        <ThumbnailContainer variant="large">
            <img className="object-cover" src={url} alt="thumbnail"/>
        </ThumbnailContainer>
    )
}
