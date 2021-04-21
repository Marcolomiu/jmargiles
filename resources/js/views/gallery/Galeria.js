import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header/Header';
import SRLWrapped from 'simple-react-lightbox';

//import * as GalleryScript from '../gallery/galeriaScript';
//import './galeriaScript';

const images = [
    { id: '1', imageName: 'IMG_20201107_113938.jpg', tag: 'Electricitat' },
    { id: '2', imageName: 'https://picsum.photos/400/250?image=526', tag: 'Electricitat' },
    { id: '3', imageName: 'https://picsum.photos/400/250?image=626', tag: 'Aigua' },
    { id: '4', imageName: 'https://picsum.photos/400/250?image=486', tag: 'Aigua' },
    { id: '5', imageName: 'https://picsum.photos/400/250?image=846', tag: 'Gas' },
    { id: '6', imageName: 'https://picsum.photos/400/250?image=1066', tag: 'Gas' },
    { id: '7', imageName: 'https://picsum.photos/400/250?image=506', tag: 'Porters/Videoportes' },
    { id: '8', imageName: 'https://picsum.photos/400/250?image=1026', tag: 'Porters/Videoportes' },
    { id: '9', imageName: 'https://picsum.photos/400/250?image=1077', tag: 'Obres i Reformes' },
    { id: '10', imageName: 'https://picsum.photos/400/250?image=102', tag: 'Recàrrega cotxes elèctrics' },
    { id: '11', imageName: 'https://picsum.photos/400/250?image=106', tag: 'Recàrrega cotxes elèctrics' },
    { id: '12', imageName: 'https://picsum.photos/400/250?image=122', tag: 'Aigua' },
    { id: '13', imageName: 'https://picsum.photos/400/250?image=526', tag: 'Obres i Reformes' }
];

const TagButton = ( {name, handleSetTag} ) => {
    return <button className="galleryFilterBtn" align="center" onClick={ () => handleSetTag(name) }>{ name }</button>
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

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center" handleSetTag={setTag}>
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
                            <div key={image.id}>
                                <a href={`${image.imageName}`}>
                                    <img className="image" src={`../../../../public/images/gallery/${image.imageName}`} alt="" />
                                </a>
                            </div>)
                        }
                    </div>
                </SRLWrapped>
            </section>
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <section className="portfolio" id="portfolio">
                <div className="container-fluid">
                    <div className="row">

                        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="gallery-title">Gallery</h1>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                            <button className="galleryFilterBtn" data-filter="all">All</button>
                            <button className="galleryFilterBtn" data-filter="category1">Designing</button>
                            <button className="galleryFilterBtn" data-filter="category2">Development</button>
                            <button className="galleryFilterBtn" data-filter="category3">Graphics</button>
                        </div>
                        
                        <br/>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category1">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=122">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=122" />
                                <div className='img-info'>
                                    <h4>Image Title 1</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category2">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=526">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=526" />
                                <div className='img-info'>
                                    <h4>Image Title 2</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category3">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=626">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=626" />
                                <div className='img-info'>
                                    <h4>Image Title 3</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category1">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=626">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=626" />
                                <div className='img-info'>
                                    <h4>Image Title 4</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category2">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=486">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=486" />
                                <div className='img-info'>
                                    <h4>Image Title 5</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category3">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=846">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=846" />
                                <div className='img-info'>
                                    <h4>Image Title 6</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category1">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=1066">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=1066" />
                                <div className='img-info'>
                                    <h4>Image Title 7</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category2">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=506">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=506" />
                                <div className='img-info'>
                                    <h4>Image Title 8</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category3">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=1026">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=1026" />
                                <div className='img-info'>
                                    <h4>Image Title 9</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category1">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=1077">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=1077" />
                                <div className='img-info'>
                                    <h4>Image Title 10</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category2">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=102">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=102" />
                                <div className='img-info'>
                                    <h4>Image Title 11</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>

                        <div className="gallery_product col-sm-3 col-xs-6 filter category3">
                            <a className="fancybox" rel="ligthbox" href="https://picsum.photos/400/250?image=106">
                                <img className="img-responsive" alt="" src="https://picsum.photos/400/250?image=106" />
                                <div className='img-info'>
                                    <h4>Image Title 12</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Galeria;