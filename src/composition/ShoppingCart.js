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
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            console.log(this.props.selected);
            console.log("selectedOption: ", selectedOption);
           
            });

            const total = Object.keys(this.props.selected).reduce(
                (acc, curr) => acc + this.props.selected[curr].cost,
                0
            );

        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{(this.props.selected[this.props.feature] != null) ? this.props.selected[this.props.feature].name : ''}</div>
            <div className="summary__option__cost">
                {(this.props.selected[this.props.feature] !=null) ? this.props.selected[this.props.feature].cost : ''}
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