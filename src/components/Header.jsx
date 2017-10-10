import React, { Component } from 'react';
import EditSaleItem from './EditSaleItem'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            itemCurrentlyOnSale: 'The Hammer! (Get Back!)',
            editSaleItem: false
        }
    }

    toggleEditSaleItem = () => {
        console.log("Hit toggleEditSaleItem");
        this.setState({ editSaleItem: !this.state.editSaleItem })

    }

    handleItemCurrentlyOnSaleChange = (event) => {
        console.log("Htiing the item on sale")
        this.setState({
            itemCurrentlyOnSale: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently on Sale: {this.state.itemCurrentlyOnSale}</p>
                <EditSaleItem 
                toggleEditSaleItem={this.toggleEditSaleItem}
                handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange} 
                editSaleItem ={this.state.editSaleItem}
                itemCurrentlyOnSale={this.state.itemCurrentlyOnSale}/>
            </div>
        );
    }
}

export default Header;