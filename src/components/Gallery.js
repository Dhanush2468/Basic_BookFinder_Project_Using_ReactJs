import React from "react";
import './Gallery.css';


class Gallery extends React.Component{



    render(){
        return(
            <div>
                {
                    this.props.items.map((item, index) => {


                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a 
                                key={index}
                                className='book'
                                href={infoLink}
                                target="_blank"
                                rel="noopener"
                            >
                                <img src={undefined !== imageLinks ? imageLinks.thumbnail : ""} 
                                    alt={`Pictured: The cover for the book is ${title}.`}
                                    className="bookCover"
                                />
                                <header className="bookTitle">
                                    {title}
                                </header>
                            </a>
                        )
                    })}
            </div>
        );
    }
}
export default Gallery;