import React from 'react';
import "./Pagination.scss";
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: ['frames-1.jpg', 'frames-2.jpg', 'frames-3.jpg', 'frames-4.jpg', 'frames-5.jpg', 'frames-6.jpg', 'frames-7.jpg', 'frames-8.jpg', 'frames-9.jpg', 'frames-10.jpg', 'frames-11.jpg', 'frames-12.jpg', 'frames-13.jpg', 'frames-14.jpg'],
            currentPage: 1,
            todosPerPage: 6,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const { pictures, currentPage, todosPerPage } = this.state;

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = pictures.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
            return <div className="col-12 col-md-4 mb-2 p-2">
                <img key={index} src={require(`../../asserts/frames-images/${todo}`)} alt={todo} />
            </div>;

        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pictures.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    className={(this.state.currentPage === number ? 'active ' : '')}
                //style={( transitonthis.state.currentPage === number ? 'active ' : '')}
                >
                    {number}
                </li >
            );
        });

        return (
            <div>
                <div className={this.props.show ? "frames-image-collections" : ""} style={{ transform: this.props.show ? "translateY(0)" : "translateY(-102%)", transition: this.props.show ? "transform transform 0.6s ease" : "" }}>
                    {renderTodos}
                </div>
                <ul id="pageNumbers">
                    {renderPageNumbers}
                </ul>
            </div >
        );
    }
}


export default Pagination;