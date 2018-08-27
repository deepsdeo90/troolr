import React,{Component} from 'react';
import Select from 'react-select';
//import classes from './SelectBox.css';

const options = [
    { value: 1, label: 'Top Rated' },
    { value: 2, label: 'Most Viewed' } ];

  
class SelectBox extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedOption: null,
        }
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        if(selectedOption.value===1)
            this.props.sortByRating();
        else    
            this.props.sortByViewCount();
      }
    render(){
        const { selectedOption } = this.state;
        const customStyles = {
            option: (base, state,isFocused, isSelected) => ({
              ...base,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft:20,
              paddinRight:20,
              cursor:'pointer',
              backgroundColor: state.isFocused ? '#f5f5f5' : '#ffffff',
              color: state.isFocused ? '#000' : '#000'
            }),
            singleValue: (base, state) => {
              return { 
                  ...base,               };
            }
          }
        return (
            <div>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            styles={customStyles}
            options={options}
            placeholder={`Sort By `}
          />
            </div>
        );
    }
}
export default SelectBox;