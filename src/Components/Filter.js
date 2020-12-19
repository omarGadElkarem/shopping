
import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} products
                </div>
                <div className="filter-sort">
                    
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortproducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="heighest">heighest</option>
                    </select>
                </div>
                <div className="filter-size">
                    filter {" "}
                    <select value={this.props.size} onChange={this.props.filterproducts}>
                        <option value="">All</option>
                        <option value="xs">Xs</option>
                        <option value="Xl">Xl</option>
                        <option value="sm">Sm</option>
                        <option value="m">m</option>
                        <option value="L">L</option>
                        <option value="XXl">XXl</option>

                        
                    </select>
                </div>
            </div>
        )
    }
}
