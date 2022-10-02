import React from 'react';
//import Auxx from '../../hoc/Auxx';
import Auxx from '../../hoc/Auxx';
//import FunctionbasedPagination from '../FunctionbasedPagination/functionbasedpagination';
import placeholderSrc from "../../asserts/052019-Summer-GIFs_2-min.gif";
//import Pagination from '../Pagination/pagination';
import ProgressiveImg from "../ProgressiveImage/ProgressiveImageComponent";
import './Backdrop.scss';

const backdrop = (props) => {
    const Sunglasseslength = ["1", "2", "3", "4", "5", "6", "7"];
    const Frameslength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
    console.log(props.type);
    let rows = null;
    switch (props.type) {
        case ("Sunglasses"): {
            // rows = <FunctionbasedPagination pictures={props.pictures} type={props.type} clicked={props.clicked} show={props.backdropdisplay}></FunctionbasedPagination>
            rows = Sunglasseslength.map(sunglasses => {
                return (
                    <div className="col-12 col-md-4 mb-2 p-2" >
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
                )


            })
            break;
        }
        case ("Frames"): {
            rows = Frameslength.map(frames => {
                return (<div className="col-12 col-md-4 mb-2 p-2">
                    <ProgressiveImg
                        src={require(`../../asserts/frames-images/frames-${frames}.jpg`)}
                        placeholderSrc={placeholderSrc}
                        alt={frames}
                        width="100%"
                        height="100%"
                    />
                </div>
                )
            })
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
                        <div className="images-section">
                            <div className="row">
                                <div className='sunglasses-section'>
                                    <span onClick={props.clicked} show={props.show}><i className="fa fa-times-circle"></i></span>
                                    {rows}
                                </div>
                            </div>
                        </div>

                        :
                        <div className="images-section">
                            <div className="row">
                                <div className='frames-section'>
                                    <span onClick={props.clicked} show={props.show}><i className="fa fa-times-circle"></i></span>
                                    {rows}
                                </div>
                            </div>
                        </div>

                }
            </Auxx>
            : null
    )
}

export default backdrop;