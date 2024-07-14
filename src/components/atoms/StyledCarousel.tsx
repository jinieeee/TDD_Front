import { Carousel } from 'antd';

const StyledCarousel = ({images}) => {
    return (
        <>
            <Carousel arrows dotPosition="right" infinite={false} speed={1000}>
                {images.map((img) =>
                    <div className="object-contain">
                        <img src={img.url} alt={img.alt} className="object-cover"></img>
                    </div>
                )}
            </Carousel>
        </>
    )
}

export default StyledCarousel;
