import React from 'react';
//import Auxx from '../../hoc/Auxx';
import Auxx from '../../hoc/Auxx';
import FunctionbasedPagination from '../FunctionbasedPagination/functionbasedpagination';
//import Pagination from '../Pagination/pagination';
import './Backdrop.scss';

const backdrop = (props) => {
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