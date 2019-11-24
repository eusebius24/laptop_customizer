import React from 'react';
import slugify from 'slugify';
class FeatureItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="feature__item">
                  <input
                    type="radio"
                    
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                  />
                  <label  className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
        );
    }
}