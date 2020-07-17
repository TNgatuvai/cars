import React from 'react';

class imageCard extends React.Component {
    render() {
        const { description, urls } = this.props.image;


        return (
            <div>
                <img 
                alt={this.props.image.description}
                src={this.props.image.urls.regular}
                />
            </div>
        );
    }
}

export default imageCard;