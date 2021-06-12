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
    { id: '1', imageName: 'obres 3.jpg', tag: 'Obres i Reformes' },
    { id: '2', imageName: 'gas 2.jpg', tag: 'Gas' },
    { id: '3', imageName: 'aigua 1.jpg', tag: 'Aigua' },
    { id: '4', imageName: 'electricitat 1.jpg', tag: 'Electricitat' },
    { id: '5', imageName: 'obres 1.jpg', tag: 'Obres i Reformes' },
    { id: '6', imageName: 'gas 1.jpg', tag: 'Gas' },
    { id: '7', imageName: 'obres 2.jpg', tag: 'Obres i Reformes' },
    { id: '8', imageName: 'electricitat 2.jpg', tag: 'Electricitat' },
    { id: '9', imageName: 'electricitat 3.jpg', tag: 'Electricitat' },
    { id: '10', imageName: 'aigua 2.jpg', tag: 'Aigua' },
    { id: '11', imageName: 'aigua 3.jpg', tag: 'Aigua' },
    { id: '12', imageName: 'electricitat 4.jpg', tag: 'Electricitat' },
    { id: '13', imageName: 'gas 3.jpg', tag: 'Gas' },
    { id: '14', imageName: 'porter 1.jpg', tag: 'Porters/Videoportes' },
    { id: '15', imageName: 'obres 4.jpg', tag: 'Obres i Reformes' },
    { id: '16', imageName: 'obres 5.jpg', tag: 'Obres i Reformes' },
    { id: '17', imageName: 'aigua 4.jpg', tag: 'Aigua' },
    { id: '18', imageName: 'aigua 5.jpg', tag: 'Aigua' },
    { id: '19', imageName: 'gas 4.jpg', tag: 'Gas' },
    { id: '20', imageName: 'gas 5.jpg', tag: 'Gas' },
    { id: '21', imageName: 'obres 6.jpg', tag: 'Obres i Reformes' },
    { id: '22', imageName: 'obres 7.jpg', tag: 'Obres i Reformes' },
    { id: '23', imageName: 'aigua 6.jpg', tag: 'Aigua' },
    { id: '24', imageName: 'obres 8.jpg', tag: 'Obres i Reformes' },
    { id: '25', imageName: 'electricitat 5.jpg', tag: 'Electricitat' },
    { id: '26', imageName: 'electricitat 6.jpg', tag: 'Electricitat' },
    { id: '27', imageName: 'aigua 7.jpg', tag: 'Aigua' },
    { id: '28', imageName: 'electricitat 7.jpg', tag: 'Electricitat' },
    { id: '29', imageName: 'gas 6.jpg', tag: 'Gas' },
    { id: '30', imageName: 'porter 2.jpg', tag: 'Porters/Videoportes' },
    { id: '31', imageName: 'electricitat 8.jpg', tag: 'Electricitat' },
    { id: '32', imageName: 'obres 9.jpg', tag: 'Obres i Reformes' },
    { id: '33', imageName: 'aigua 8.jpg', tag: 'Aigua' },
    { id: '34', imageName: 'aigua 9.jpg', tag: 'Aigua' },
    { id: '35', imageName: 'electricitat 9.jpg', tag: 'Electricitat' },
    { id: '36', imageName: 'obres 10.jpg', tag: 'Obres i Reformes' },
    { id: '37', imageName: 'electricitat 10.jpg', tag: 'Electricitat' },
    { id: '38', imageName: 'obres 11.jpg', tag: 'Obres i Reformes' },
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