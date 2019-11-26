import React from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class SpecList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureItem feature={this.props.features[feature]} handleUpdateFeature={this.props.handleUpdateFeature} handleUpdateFeatureHash = {this.props.handleUpdateFeatureHash} />
        </fieldset>
      );
    });
    return <div>{features}</div>;
  }
}

export default SpecList;
