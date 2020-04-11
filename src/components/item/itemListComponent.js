import React, { Component } from "react";


class itemListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : ""
        }
    }

    componentWillMount() {
        console.log("init " + this.props.itemType)
    }   

    getItemList = () => {
        
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.itemType);
    }


    render() {
        return (
            <div> items </div>
        );
    };
};

export default itemListComponent;