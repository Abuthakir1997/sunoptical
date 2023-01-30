import React from 'react';
import placeholderSrc from "../../asserts/052019-Summer-GIFs_2-min.gif";
import ProgressiveImg from '../ProgressiveImage/ProgressiveImageComponent';
import "../Backdrop/Backdrop.scss";
import { Link } from 'react-router-dom';

const Frames = (props) => {
    const Frameslength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
    //const framesSectionRow = document.getElementsByClassName('images-section row')



    // Frameslength.forEach(function (framesdata, index) {

    //         $('#' + index + '.dynamic-container .inside-dynamic-container').on('scroll', function () {
    //             let div = $(this).get(0);
    //             if (div.scrollTop + div.clientHeight + 100 >= div.scrollHeight) {
    //                 let id = $(this).parent().get(0).id;
    //                 if (dynamicConData[id].length > 0) {
    //                     // do the lazy loading here
    //                     var sliceData = dynamicConData[id].splice(0, scrollItemLength);
    //                     var itemHtml = buildTemplate(sliceData, "item-absolute-dynamic-data-template");
    //                     $("#" + id + " .inside-dynamic-container.items-content").append(itemHtml);
    //                 }
    //             }
    //         });










    const rows = Frameslength.map(frames => {
        return <div className="col-12 col-md-4 mb-2 p-2" >
            <ProgressiveImg
                src={require(`../../asserts/frames-images/frames-${frames}.jpg`)}
                placeholderSrc={placeholderSrc}
                alt={""}
                key={frames}
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
                    <div className='frames-section'>
                        <Link to="/" exact>
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