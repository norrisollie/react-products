import React from 'react';

class ComparedProducts extends React.Component {

    render() {

        // const numCompared = this.props.products.map(compared => {
        //     console.log(compared)
        // })

        return (
            <div className="compared-products">
                <div>You have compared {this.props.numberCompared} products</div>
            </div>
        );
    }
}

export default ComparedProducts