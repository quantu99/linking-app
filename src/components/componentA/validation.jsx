const validation = (values) => {
    let errors = {};
    const youtubeUrl = /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/)?|youtu\.be\/)/;
    const instagramUrl = /^(https?:\/\/)?(www\.)?instagram\.com\//;
    const tiktokUrl = /^(https?:\/\/)?(www\.)?tiktok\.com\//;
    if (!values.link) {
        errors.link = 'This field is required';
    } else if (values.link.indexOf(' ') !== -1) {
        errors.link = 'This field must not have the empty space ';
    } else if (
        !(youtubeUrl.test(values.link) && values.link.includes('v=')) &&
        !(instagramUrl.test(values.link) && values.link.includes('?utm_source=')) &&
        !(tiktokUrl.test(values.link) && values.link.includes('@'))
    ) {
        errors.link = 'Invalid URL for social media';
    }
    return errors;
};
export default validation;
