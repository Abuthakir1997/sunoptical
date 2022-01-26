import React from "react";
import Pagination from "./lib/Pagination";
import Auxx from "../../hoc/Auxx";
import Loader from "../Loader/loader";

// const App = () => (

class pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pictures: ['frames-1.jpg', 'frames-2.jpg', 'frames-3.jpg', 'frames-4.jpg', 'frames-5.jpg', 'frames-6.jpg', 'frames-7.jpg', 'frames-8.jpg', 'frames-9.jpg', 'frames-10.jpg', 'frames-11.jpg', 'frames-12.jpg', 'frames-13.jpg', 'frames-14.jpg', 'frames-15.jpg', 'frames-16.jpg', 'frames-17.jpg', 'frames-18.jpg', 'frames-19.jpg', 'frames-20.jpg', 'frames-21.jpg'],
            backdropdisplay: false,
        };

    }
    showingFalseHandler = () => {
        this.setState({
            backdropdisplay: false,
        })
    }

    changeCurrentPage = numPage => {
        this.setState({
            currentPage: numPage,
        });
    };

    changingHandler(e) {
        this.setState({
            pictures: ['sun-glassess-1.jpg', 'sun-glassess-2.jpg', 'sun-glassess-3.jpg', 'sun-glassess-4.jpg', 'sun-glassess-5.jpg'],
        });
    }

    componentDidMount() {
        return <Loader></Loader>
    }
    componentWillMount() {
        //return <Loader></Loader>
    }
    render() {

        const Sunglasseslength = ["1", "2", "3", "4", "5"];
        const Frameslength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
        const sizePerPage = 6;
        const indexOfLastTodo = this.state.currentPage * sizePerPage;
        const indexOfFirstTodo = indexOfLastTodo - sizePerPage;
        let picturesLength = [];
        picturesLength = [this.props.type === "Frames" ? Frameslength : Sunglasseslength];
        picturesLength.push(picturesLength);
        const currentTodos = picturesLength[0].slice(indexOfFirstTodo, indexOfLastTodo);
        const renderDynamicimages = currentTodos.map((todo, index) => {
            return (
                this.props.type === "Frames"
                    ?
                    <div className="col-12 col-md-4 mb-2 p-2"><img key={index} src={require(`../../asserts/frames-images/frames-${todo}.jpg`)} alt={todo} /></div>
                    :
                    <div className="col-12 col-md-4 mb-2 p-2"><img key={index} src={require(`../../asserts/sunglasses-images/sun-glasses-${todo}.jpg`)} alt={todo} /></div>
            )

        });
        return (
            <Auxx>

                <div className="images-section" >
                    <div className="row">
                        {this.props.type === "Sunglasses"
                            ?
                            <div className="sunglasses-section">
                                <span show={this.props.backdropdisplay} onClick={this.props.clicked}><i className="fa fa-times-circle"></i></span>
                                {renderDynamicimages}
                            </div>
                            :
                            <div className="frames-section">
                                <span show={this.props.backdropdisplay} onClick={this.props.clicked}><i className="fa fa-times-circle"></i></span>
                                {renderDynamicimages}
                            </div>}
                        <div className="container">
                            <div className="box-theme">
                                <div className="pages">
                                    <Pagination
                                        currentPage={this.state.currentPage}
                                        totalSize={this.props.type === "Frames" ? Frameslength.length : Sunglasseslength.length}
                                        changeCurrentPage={this.changeCurrentPage}
                                        theme="bootstrap"
                                    />

                                </div>
                                <div className="code" style={{ display: "none" }}>
                                    <code >{` <Pagination\n
                            currentPage={this.state.currentPage}\n
                            totalSize={100}\n
                            sizePerPage={10}\n
                            changeCurrentPage={this.changeCurrentPage}\n
                            theme="bootstrap"\n
                        />`}

                                    </code>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Auxx>


        );
    }
}
export default pagination;