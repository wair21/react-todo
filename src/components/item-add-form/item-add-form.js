import React, { Component  } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    /**
     * обработчик ввода значения на поле
     * @param ev
     */
    onLabelChange = (ev) => {
       this.setState({
          label: ev.target.value
       });
    };

    /**
     * обработчик кнопки Добаления значения
     * @param ev
     */
    onSubmit = (ev) => {
        ev.preventDefault();
        if (!!this.state.label) {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        }
    };

    render() {
         return (
           <form className="item-add-form  d-flex"
               onSubmit={this.onSubmit}>
               <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="what need to be done"
               value={this.state.label}/>
            <button className="btn btn-outline-secondary">
                Add Item
            </button>
           </form>
         );
    }
}