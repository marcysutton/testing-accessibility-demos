import React, {useState, useRef} from "react"
import PropTypes from "prop-types"
import LoadedImageUrl from "workshop4-components/utils/loaded-image-url"

import "workshop4-components/slideshow/slideshow.scss"

const Slideshow = ({images = [], imageURLs}) => {
    let [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    let [fullScreenMode, setFullScreenMode] = useState(false)
    
    const btnFullScreenRef = useRef(null)
    const btnCloseRef = useRef(null)
    const slideshowRef = useRef(null)
    
    const decrementSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1)
        } else {
            setCurrentSlideIndex(images.length - 1)
        }
    }
    const incrementSlide = () => {
        if (currentSlideIndex < images.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1)
        } else {
            setCurrentSlideIndex(0)
        }
    }
    const changeSlide = (index) => {
        setCurrentSlideIndex(index)
    }
    const enterFullScreen = () => {
        setFullScreenMode(true)
        slideshowRef.current.focus()
    }
    const closeFullScreen = () => {
        setFullScreenMode(false)
        btnFullScreenRef.current.focus()
    }
    const handleScreenClick = (event) => {
        if (!slideshowRef.current.contains(event.target)) {
            setFullScreenMode(false)
        }
    }
    const preventDefaultFunc = (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
        }
    }
    const keyUpHandler = (event) => {
        if (event.key === 'Escape') {
            closeFullScreen()
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            // advance slides
            incrementSlide()
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            // reverse slides
            decrementSlide()
        }
    }

    return (
        <>
            <button
                aria-label="Go Full Screen"
                className="btn-slideshow-fullscreen" 
                onClick={enterFullScreen}
                ref={btnFullScreenRef}
                title="Enter Full screen"
            >
                <span aria-hidden="true" className="icon"></span>
            </button>
            <div
                className={`inspiration-slideshow ${fullScreenMode ? 'fullscreen' : ''}`}
                onClick={(event)=>handleScreenClick(event)}
                onKeyDown={preventDefaultFunc}
                onKeyUp={(event)=> { keyUpHandler(event) }}
            >
                <button
                    aria-label="Close Full Screen mode"
                    className="btn-slideshow-close"
                    onClick={closeFullScreen}
                    ref={btnCloseRef}
                >
                    <span aria-hidden="true" className="icon"></span>
                </button>
                <div
                    aria-live="polite"
                    aria-roledescription="Image Slideshow"
                    className="slideshow-container"
                    ref={slideshowRef}
                    role={fullScreenMode ? 'application' : 'region'}
                    tabIndex="-1"
                >
                    {images.map((image, index) => {
                        const imageUrl = imageURLs ? LoadedImageUrl(imageURLs, image.src) : image.src
                        return (
                            <figure
                                aria-describedby={`count-${index}`}
                                aria-labelledby={`img-${index} caption-${index}`}
                                className={`slide fade ${currentSlideIndex === index ? 'active' : ''}`}
                                key={index}
                            >
                                <p className="numbertext" id={`count-${index}`}>
                                    {index + 1} of {images.length}
                                </p>
                                <img src={imageUrl} alt={image.alt} style={{width: "100%"}} id={`img-${index}`} />
                                <figcaption className="text" id={`caption-${index}`}>{image.caption}</figcaption>
                            </figure>
                        )
                    })}

                    <button
                        aria-label="Previous slide"
                        className="prev"
                        onClick={()=>decrementSlide()}
                    >
                        <span aria-hidden="true">&#10094;</span>
                    </button>
                    <button
                        aria-label="Next slide"
                        className="next"
                        onClick={()=>incrementSlide()}
                    >
                        <span aria-hidden="true">&#10095;</span>
                    </button>
                </div>
                <br />

                <ul className="dots">
                    {images.map((image, index) => (
                    <li key={index}>
                        <button
                            aria-label={`Go to slide ${index + 1}`}
                            className={`dot ${currentSlideIndex === index ? 'active' : ''}`}
                            onClick={()=>changeSlide(index)}
                        >
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string
    }))
}

export default Slideshow