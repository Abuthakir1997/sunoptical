import React from 'react';
import placeholderSrc from "../../asserts/052019-Summer-GIFs_2-min.gif";
import ProgressiveImg from '../ProgressiveImage/ProgressiveImageComponent';
import "../Backdrop/Backdrop.scss";
import { Link } from 'react-router-dom';
import sunglassesImages from "../../configurations/sunglasses-images-config.json";
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const Sunglasses = (props) => {
    const [allItems, setAllItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    //console.log("sunglasses",sunglassesImages);

    useEffect(() => {
        setAllItems(sunglassesImages);
        setDisplayItems(sunglassesImages.slice(0, 10));
    }, []);


    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        if (displayItems.length === allItems.length) {
            setHasMore(false);
            return;
        }
        setDisplayItems(displayItems.concat(allItems.slice(displayItems.length, displayItems.length + 10)));
    }, [allItems, displayItems, hasMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const rows = sunglassesImages.map((sunglasses, index) => {
        return <div className="col-12 col-md-4 mb-2 p-2" key={index}>
            <ProgressiveImg
                src={require(`../../asserts/sunglasses-images/${sunglasses.image}`)}
                placeholderSrc={placeholderSrc}
                alt={""}
                key={index}
                width="100%"
                height="100%"
            />
        </div>
    })
    return (
        <>
            <div className="backdrop"></div>
            <div className="images-section">
                <div className="row">
                    <div className='sunglasses-section'>
                        <Link to="/">
                            <span><i className="fa fa-times-circle"></i></span>
                        </Link>
                        {rows}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sunglasses;