import React from 'react';
import './Backdrop.scss';

const backdrop = (props) => {
    let rows = null;
    var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    let frames = arr.map(framesImages => {
        return (
            <div className="col-12 col-md-4 mb-3">
                <img key={`${framesImages}`} src={require(`../../asserts/frames-images/frames-${framesImages}.jpg`)} alt="frames" />
            </div>
        )
    })
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
                {frames}
            </div>);
            break;
        }


        default:
            rows = null;
            break;
    }
    return (
        props.show ? <div className="sunglasses-section"><div className="backdrop" onClick={props.clicked}></div>
            <span onClick={props.clicked}><i className="fa fa-times-circle"></i></span>
            {rows}
        </div> : null
    )
}
// class BackDrop extends Component {
//     render() {
//         let rows = null;
//         switch (this.props.type) {
//             case ('Sunglasses'):
//                 rows = <div id="sunGlasses" className="row sunglasses-row">
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/mercury.jpg")} alt="header-logo" />
//                     </div>
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/night-driving.jpg")} alt="header-logo" />
//                     </div>
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/night-driving.jpg")} alt="header-logo" />
//                     </div>
//                 </div>
//                 break;
//             case ('Frames'):
//                 rows = <div className="row frames-row d-none">
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/frames-tr.jpg")} alt="header-logo" />
//                     </div>
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/night-driving.jpg")} alt="header-logo" />
//                     </div>
//                     <div className="col-12 col-md-4 mb-3">
//                         <img src={require("../../asserts/frames-images/night-driving.jpg")} alt="header-logo" />
//                     </div>
//                 </div>
//                 break;
//             default:
//                 rows = null;
//         }
//         return props.show ? <div className="sunglasses-section"><div className="backdrop" onClick={props.clicked}></div>
//             <span onClick={props.clicked}><i class="fa fa-times-circle"></i></span>
//             {rows}
//         </div> : null;
//     }
// }
// BackDrop.propsTypes = {
//     type: PropTypes.string.isRequired,
//     show: PropTypes.string.isRequired
// }
export default backdrop;