import React, { useEffect, useState } from 'react';
import '../assets/Gallery.css';
import axios from 'axios';

export default function Gallery() {
    const [gallery, setGallery] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/gallery`)
            .then(response => {
                setGallery(response.data[0].data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const openImageModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImageIndex(null);
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex(prevIndex => (prevIndex === 0 ? gallery.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setSelectedImageIndex(prevIndex => (prevIndex === gallery.length - 1 ? 0 : prevIndex + 1));
    };

    const handleKeyboardNavigation = (event) => {
        if (selectedImageIndex !== null) {
            if (event.key === 'ArrowLeft') {
                goToPreviousImage();
            } else if (event.key === 'ArrowRight') {
                goToNextImage();
            } else if (event.key === 'Escape') {
                closeImageModal();
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardNavigation);

        return () => {
            document.removeEventListener('keydown', handleKeyboardNavigation);
        };
    }, [selectedImageIndex]);

    return (

        <>
            <section>
                <div className='container shadow my-5'>
                    <div className='component-page-heading text-center shadow my-5'>
                        <h1>Gallery</h1>
                    </div>
                </div>
            </section>

            <div className='container shadow my-5'>
                <div className='media-container'>
                    {gallery.map((el, index) => (
                        <div className="media" key={index} onClick={() => openImageModal(index)}>
                            <img src={`http://localhost:8000/${el.images[0]}`} alt='' />
                        </div>
                    ))}
                </div>
                {selectedImageIndex !== null && (
                    <div className="popup-media">
                        <span className="close-btn" onClick={closeImageModal}>&times;</span>
                        <button className="prev-btn" onClick={goToPreviousImage}>&lt;</button>
                        <img src={`http://localhost:8000/${gallery[selectedImageIndex].images[0]}`} alt='' />
                        <button className="next-btn" onClick={goToNextImage}>&gt;</button>
                    </div>
                )}
            </div>
        </>
    );
}
