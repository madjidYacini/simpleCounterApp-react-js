import React from "react"
import { render } from 'react-dom';

    class BtnR extends React.Component {
        render(){
        return (
        <button onClick ={this.props.onClickFunctionR}>
        
        reset to Zero
        
        </button>
        );
        }
        }

        export default BtnR