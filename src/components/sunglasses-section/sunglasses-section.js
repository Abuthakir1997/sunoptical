import React from 'react';
import placeholderSrc from "../../asserts/052019-Summer-GIFs_2-min.gif";
import ProgressiveImg from '../ProgressiveImage/ProgressiveImageComponent';
import "../Backdrop/Backdrop.scss";
import { Link } from 'react-router-dom';


const Sunglasses = (props) => {
    const Sunglasseslength = ["1", "2", "3", "4", "5", "6", "7"];
    const rows = Sunglasseslength.map(sunglasses => {
        return <div className="col-12 col-md-4 mb-2 p-2" >
            <ProgressiveImg
                src={require(`../../asserts/sunglasses-images/sun-glasses-${sunglasses}.jpg`)}
                placeholderSrc={placeholderSrc}
                alt={""}
                key={sunglasses}
                width="100%"
                height="100%"
            />
            {/* <img key={index} src={require(`../../asserts/sunglasses-images/sun-glasses-${todo}.jpg`)} alt={todo} /> */}
        </div>
    })
    return (
        <>
            <div className="backdrop"></div>
            <div className="images-section">
                <div className="row">
                    <div className='sunglasses-section'>
                        <Link to="/">
                            <span onClick={props.clicked} show={props.show}><i className="fa fa-times-circle"></i></span>
                        </Link>
                        {rows}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sunglasses;