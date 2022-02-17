import PropTypes from 'prop-types'

const LoadedImageUrl = (imageMap = {}, imageSrc = '') => {
    // imageMap glob returns images with extension as key ({png:''})
    const imageObj = imageMap[imageSrc.split('.')[0]]

    // Access child property no matter the file extension
    const imageUrl = imageObj[Object.keys(imageObj)[0]]

    return imageUrl
}

LoadedImageUrl.propTypes = {
    imageMap: PropTypes.object.required,
    imageSrc: PropTypes.string.required
}

export default LoadedImageUrl