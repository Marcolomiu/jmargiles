import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import SRLWrapped from 'simple-react-lightbox';

//import * as GalleryScript from '../gallery/galeriaScript';
//import './galeriaScript';


//how to center image inside a grid
//https://stackoverflow.com/questions/37085983/how-to-center-image-inside-grid-col

//https://picsum.photos/400/250?image=122

const images = [
    { id: '1', imageName: '122-400x250.jpg', tag: 'Obres i Reformes' },
    { id: '2', imageName: '123-400x250.jpg', tag: 'Aigua' },
    { id: '3', imageName: '124-400x250.jpg', tag: 'Electricitat' },
    { id: '4', imageName: '128-400x250.jpg', tag: 'Recàrrega cotxes elèctrics' },
    { id: '5', imageName: '136-400x250.jpg', tag: 'Gas' },
    { id: '6', imageName: '140-400x250.jpg', tag: 'Porters/Videoportes' },
    { id: '7', imageName: '152-400x250.jpg', tag: 'Porters/Videoportes' },
    { id: '8', imageName: '164-400x250.jpg', tag: 'Electricitat' },
    { id: '9', imageName: '166-400x250.jpg', tag: 'Obres i Reformes' },
    { id: '10', imageName: '168-400x250.jpg', tag: 'Recàrrega cotxes elèctrics' },
    { id: '11', imageName: '175-400x250.jpg', tag: 'Recàrrega cotxes elèctrics' },
    { id: '12', imageName: '179-400x250.jpg', tag: 'Aigua' },
    { id: '13', imageName: '182-400x250.jpg', tag: 'Gas' },
    { id: '14', imageName: '188-400x250.jpg', tag: 'Porters/Videoportes' },
    { id: '15', imageName: '191-400x250.jpg', tag: 'Aigua' },
    { id: '16', imageName: '193-400x250.jpg', tag: 'Obres i Reformes' },
    { id: '17', imageName: '195-400x250.jpg', tag: 'Gas' },
    { id: '18', imageName: '197-400x250.jpg', tag: 'Recàrrega cotxes elèctrics' },
    { id: '19', imageName: '199-400x250.jpg', tag: 'Aigua' },
    { id: '20', imageName: '1000-400x250.jpg', tag: 'Electricitat' }
];

const TagButton = ( {name, handleSetTag} ) => {
    return <button className="btn btn-jma" onClick={ () => handleSetTag(name) }>{ name }</button>
}

function Galeria () {
    
    const [tag, setTag] = useState('Tots');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect( () => {
        tag == 'Tots' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
        }, [tag]
    );

    return (
        <div>
            <Header/>
            <div className="headerMargin"></div>
            <section>

                <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="gallery-title">Galeria</h1>
                </div>

                <div className="switchButtons col-lg-12 col-md-12 col-sm-12 col-xs-12" handleSetTag={setTag}>
                    <TagButton name="Tots" handleSetTag={setTag} />
                    <TagButton name="Electricitat" handleSetTag={setTag} />
                    <TagButton name="Aigua" handleSetTag={setTag} />
                    <TagButton name="Gas" handleSetTag={setTag} />
                    <TagButton name="Porters/Videoportes" handleSetTag={setTag} />
                    <TagButton name="Obres i Reformes" handleSetTag={setTag} />
                </div>

                <SRLWrapped>
                    <div className="galleryContainer">
                        {filteredImages.map(image => 
                            <div className="imageContainer" key={image.id}>
                                <a href={`${image.imageName}`}>
                                    <img className="image" src={`/images/gallery/${image.imageName}`} alt="" />
                                </a>
                            </div>)
                        }
                    </div>
                </SRLWrapped>
            </section>
        </div>
    );
}

export default Galeria;

/*
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <SimpleReactLightbox>{element}</SimpleReactLightbox>
);
*/