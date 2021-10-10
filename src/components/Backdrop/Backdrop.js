import React from 'react';
//import Auxx from '../../hoc/Auxx';
import Auxx from '../../hoc/Auxx';
import Pagination from '../Pagination/pagination';
import './Backdrop.scss';

const backdrop = (props) => {
    const array = ["1", "2"];
    const images = array.map((images) => {
        return (
            <div className="col-12 col-md-4 mb-3">
                <img src={require(`../../asserts/sunglasses-images/sun-glasses-${images}.jpg`)} alt="header-logo" />
            </div>
        )
    });
    let rows = null;
    switch (props.type) {
        case ("Sunglasses"): {
            rows = (<div id="sunGlasses" className="row sunglasses-row">
                {images}
            </div>)
            break;
        }
        case ("Frames"): {
            rows = (<div id="frames" className="row frames-row">
                <Pagination show={props.show}></Pagination>
            </div>);
            break;
        }


        default:
            rows = null;
            break;
    }
    return (
        props.show ?
            <Auxx><div className="backdrop" onClick={props.clicked}></div><div className="sunglasses-section">
                <span onClick={props.clicked}><i className="fa fa-times-circle"></i></span>
                {rows}
            </div></Auxx>
            : null
    )
}

export default backdrop;