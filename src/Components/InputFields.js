import React from "react";

class InputFields extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.name}></label>
                <input type={this.props.text} id={this.props.id} name={this.props.name} value={this.props.value} placeholder={this.props.placeHolder} required />
            </div>
        )
    }
}

export default InputFields