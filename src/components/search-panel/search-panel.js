import React, { Component } from "react";
import './search-panel.css';


export default class SearchPanel extends Component {

    state = {
      term: ''
    };

    /**
     * обработчик строки поиска
     */
    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type="text"
                   value={this.state.term}
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={this.onSearchChange}
            />
        );
    }
}
