import React from 'react';

class SpecList extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = feature.map((item) => {})
        });
        return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.props.features}
          </form>
        );
    }
}

export default SpecList;