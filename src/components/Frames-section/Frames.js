import React, { useEffect, useState } from 'react';
import placeholderSrc from "../../asserts/052019-Summer-GIFs_2-min.gif";
import ProgressiveImg from '../ProgressiveImage/ProgressiveImageComponent';
import "../Backdrop/Backdrop.scss";
import { Link } from 'react-router-dom';
import framesImages from "../../configurations/frames-images-config.json";
import { useCallback } from 'react';

const Frames = (props) => {
    const [allItems, setAllItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    //console.log("sunglasses",sunglassesImages);

    useEffect(() => {
        setAllItems(framesImages);
        setDisplayItems(framesImages.slice(0, 10));
    }, []);


    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        if (displayItems.length === allItems.length) {
            setHasMore(false);
            return;
        }
        console.log("displayitems", displayItems);
        setDisplayItems(displayItems.concat(allItems.slice(displayItems.length, displayItems.length + 10)));

    }, [displayItems, allItems, hasMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);



    const rows = framesImages.map((frames, index) => {
        return <div className="col-12 col-md-4 mb-2 p-2" key={index}>
            <ProgressiveImg
                src={require(`../../asserts/frames-images/${frames.image}.jpg`)}
                placeholderSrc={placeholderSrc}
                alt={""}
                key={frames}
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
                    <div className='frames-section'>
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

export default Frames;