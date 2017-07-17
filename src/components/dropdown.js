import React,{Component} from 'react';


class Dropdown extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={
        selected: "selected"
    }
  }
  handleChange(e) {
    console.log("event",e.target.value);
          if (this.props.onChange) {
              var change = {
                oldValue: this.state.selected,
                newValue: e.target.value
              }
              this.props.onChange(change);
          }
          this.setState({selected: e.target.value});
      }
  render() {
      var self = this;

console.log(this);
      var options = self.props.options.map(function(option,index) {
        return (
              <option key={option.id} value={option.team_name}>
                  {option.team_name}
              </option>
          )
      });
      return (
          <select id={this.props.id}
                  className='form-control'
                  value={this.state.selected}
                  onChange={this.handleChange}
                  ref={this.props.reference}>
                  <option value="-1">
                    Choose Teams
                  </option>
              {options}
          </select>
      )
  }
}
export default Dropdown;
// var Dropdown1 = React.createClass({
//
//     propTypes: {
//         id: React.PropTypes.string.isRequired,
//         options: React.PropTypes.array.isRequired,
//         value: React.PropTypes.oneOfType(
//             [
//                 React.PropTypes.number,
//                 React.PropTypes.string
//             ]
//         ),
//         valueField: React.PropTypes.string,
//         labelField: React.PropTypes.string,
//         onChange: React.PropTypes.func
//     },
//
//     getDefaultProps: function() {
//         return {
//             value: null,
//             valueField: 'value',
//             labelField: 'label',
//             onChange: null
//         };
//     },
//
//     getInitialState: function() {
//         var selected = this.getSelectedFromProps(this.props);
//         return {
//             selected: selected
//         }
//     },
//
//     componentWillReceiveProps: function(nextProps) {
//         var selected = this.getSelectedFromProps(nextProps);
//         this.setState({
//            selected: selected
//         });
//     },
//
//     getSelectedFromProps(props) {
//         var selected;
//         if (props.value === null && props.options.length !== 0) {
//             selected = props.options[0][props.valueField];
//         } else {
//             selected = props.value;
//         }
//         return selected;
//     },
//
//     render: function() {
//         var self = this;
//
//         var options = self.props.options.map(function(option,index) {
//           return (
//                 <option key={index} value={index}>
//                     {option.team_name}
//                 </option>
//             )
//         });
//         return (
//             <select id={this.props.id}
//                     className='form-control'
//                     value={this.state.selected}
//                     onChange={this.handleChange}>
//                     <option value="-1">
//                       Choose Teams
//                     </option>
//                 {options}
//             </select>
//         )
//     },
//
//     handleChange: function(e) {
//         if (this.props.onChange) {
//             var change = {
//               oldValue: this.state.selected,
//               newValue: e.target.value
//             }
//             this.props.onChange(change);
//         }
//         this.setState({selected: e.target.value});
//     }
//
// });
