import React from 'react';
//import Auxx from '../../hoc/Auxx';
import Auxx from '../../hoc/Auxx';
import Pagination from '../Pagination/pagination';
import './Backdrop.scss';

const backdrop = (props) => {
    let rows = null;
    switch (props.type) {
        case ("Sunglasses"): {
            rows = (<div id="sunGlasses" className="row sunglasses-row">
                <div className="col-12 col-md-4 mb-3">
                    <img src={require("../../asserts/sunglasses-images/sun-glasses-1.jpg")} alt="header-logo" />
                </div>
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