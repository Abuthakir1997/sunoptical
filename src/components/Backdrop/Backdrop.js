import React from 'react';
//import Auxx from '../../hoc/Auxx';
import Auxx from '../../hoc/Auxx';
import FunctionbasedPagination from '../FunctionbasedPagination/functionbasedpagination';
//import Pagination from '../Pagination/pagination';
import './Backdrop.scss';

const backdrop = (props) => {
    const array = ["1", "2", "3", "4", "5"];
    const Sunglasseslength = ["1", "2", "3", "4", "5"];
    const Frameslength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    const Sunglassesimages = Sunglasseslength.map((sunglassesimages) => {
        return (
            <div className="col-12 col-md-4 mb-2 p-2">
                <img src={require(`../../asserts/sunglasses-images/sun-glasses-${sunglassesimages}.jpg`)} alt="header-logo" />
            </div>
        )
    });
    const Framesimages = Frameslength.map((framesimages) => {
        return (
            <div className="col-12 col-md-4 mb-2 p-2">
                <img src={require(`../../asserts/frames-images/frames-${framesimages}.jpg`)} alt="header-logo" />
            </div>
        )
    });
    let rows = null;
    switch (props.type) {
        case ("Sunglasses"): {
            rows = <FunctionbasedPagination pictures={props.pictures} type={props.type} clicked={props.clicked} show={props.backdropdisplay}></FunctionbasedPagination>
            break;
        }
        case ("Frames"): {
            rows = <FunctionbasedPagination pictures={props.pictures} type={props.type} clicked={props.clicked} show={props.backdropdisplay}></FunctionbasedPagination>
            break;
        }


        default:
            rows = null;
            break;
    }
    return (
        props.show ?
            <Auxx>
                <div className="backdrop" onClick={props.clicked}></div>
                {
                    props.type === "Sunglasses"
                        ?
                        <div>
                            <span onClick={props.clicked} show={props.show}><i className="fa fa-times-circle"></i></span>
                            {rows}
                        </div>
                        :
                        <div>
                            <span onClick={props.clicked} show={props.show}><i className="fa fa-times-circle"></i></span>
                            {rows}
                        </div>
                }
            </Auxx>
            : null
    )
}

export default backdrop;