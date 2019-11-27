import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class FeatureItem extends React.Component {
  render() {const options = this.props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    console.log(item);
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(JSON.stringify(this.props.feature))}
          checked={item.name === this.props.featureName}
          onChange={e => this.props.handleUpdateFeature(this.props.featureName, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );

  });
  return(<div>{options}</div>)
}
  
  
}
export default FeatureItem;
