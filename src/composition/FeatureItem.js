import React from 'react';
import slugify from 'slugify';

class FeatureItem extends React.Component {
  render() {
    const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={e => this.props.handleUpdateFeature(e.target.id)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
  return (<div>{options}</div>);
  }
  
}
export default FeatureItem;