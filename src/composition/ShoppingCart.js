import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
            console.log(this.state.selected);
            console.log("selectedOption: ", selectedOption);
           
            });

            const total = Object.keys(this.state.selected).reduce(
                (acc, curr) => acc + this.state.selected[curr].cost,
                0
            );

        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.state.selected[this.props.feature].name}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(this.state.selected[this.props.feature].cost)}
            </div>
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
            </div>
            </div>
        );
           
        
        
          
        
    }
        
    
}


export default ShoppingCart;