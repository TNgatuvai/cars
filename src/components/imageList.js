import './imageList.css';
import React from 'react';

const imageList = props => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={urls.regular} />;
    });

    return <div className="image-list">{images}</div>;
};

export default imageList;