import React from 'react';

// class DisplayDecision extends React.Component {
//     constructor(props) {
//         super(props);
//         this.showOption = this.props.showOption;
//         this.params = this.props.params;
//     }

//     render() {
//         let propObj = {
//             params: this.props.params,
//             appInfo: this.props.appInfo
//         };
//         const { params, appInfo } = propObj;

//         return (
//             <div>
//                 {/* {<p>Numeral: {this.state.randomNumeral}</p>} */}
//                 {this.props.showOption && <p>Here's what you can choose : {this.props.optionPicked}</p>}
//                 <br />
//             </div>
//         );
//     }
// }


//Stateless Comonents are defined like this
var DisplayDecision = (props) => (  // arrow function implicitly returning without mentioning 'return' statement
    <div>{props.optionPicked &&
        <p className='display-decision display-decision__title'>Here's what you can choose : {props.optionPicked}</p>

    }
    </div>
);


export default DisplayDecision;