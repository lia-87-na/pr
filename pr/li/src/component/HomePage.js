import React, { useState } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { slide } from '../script/slide'

let slideItem = slide.map((elem) => {
    return [elem.src]
})
export default function HomePage() {
    let [slideIndex, setSlideIndex] = useState(0)
    let image = [slideItem]

    image = String(image).split(',')


    let goNext = () => {
         setSlideIndex((previous) => (previous + 1) % image.length);
    };

    let goPrevious = () => {
         setSlideIndex((previous) =>
            previous === 0 ? image.length - 1 : previous - 1
        );
    };
    return (
        <div className='container homePage'>
            <div className='container-fluid slide' style={{
                backgroundImage: `url(${image[slideIndex]})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
            }}>
                <p onClick={goPrevious}>
                    <GrPrevious />
                </p>
                <p onClick={goNext}>
                    <GrNext />
                </p>
            </div>

    
        </div>
    )
}
