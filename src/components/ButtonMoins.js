import React from "react";
import { render } from 'react-dom';



    class BtnM extends React.Component {
        handleClick = () => {
 
            this.props.onClickFunctionM(this.props.decrementValue);
           
           }
        render(){
        return (
        <button onClick ={this.handleClick}>
        
        -{this.props.decrementValue}
        
        </button>
        );
        }
        }

        export default BtnM