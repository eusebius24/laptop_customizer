import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class FeatureItem extends React.Component {
  state = {
    selected: null
  };

  componentDidMount() {
    const feature = this.props.feature;
    this.setState({
      selected: feature[0]
    });
  }

  updateSelected = () => {};

  render() {
    const { selected } = this.state;
    // console.log(selected);
    const options = this.props.feature.map((item, index) => {
      // console.log(item);
      const itemHash = slugify(JSON.stringify(item));
      // console.log(itemHash);
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(JSON.stringify(this.props.feature))}
            // checked={item.name === selected[this.props.feature].name}
            onChange={e => function() {
              this.props.handleUpdateFeature(this.props.feature, e.target.id),
              this.props.handleUpdateFeatureHash(featureHash)
              }
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
    return <div>{options}</div>;
  }
}
export default FeatureItem;
