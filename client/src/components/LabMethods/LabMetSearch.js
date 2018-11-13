import React from 'react';
import {connect} from 'react-redux';
import {textFilter, searchAll} from '../../actions/filterActions';






class LabMetSearch extends React.Component {
    
    constructor(props) {
        super(props)
    }

    textFilter = (e) => {
        this.props.textFilter(e.target.value)
    }

    clearSearch = (e) => {
        e.preventDefault();
        this.props.textFilter('');
    }

    searchAll = () => {
        this.props.searchAll(!this.props.isSearchAll)
    }
    
    render() {
        return (
            <div>
                <form> 
                    <input type='search' name='search' value={this.props.text} placeholder='hledany vyraz' onChange={this.textFilter}></input>
                    <button value='' onClick={this.clearSearch} checked={this.props.isSearchAll}>X</button>
                    
                    <input type='checkbox' name='searchall' onChange={this.searchAll} checked={this.props.isSearchAll}></input>
                    <label htmlFor="searchall">HLEDAT VSUDE</label>
                    
                </form> 
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        text: state.labTests.filters.text,
        isSearchAll: state.labTests.filters.searchAll
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        textFilter: (text_arg) => {
            dispatch(textFilter(text_arg));
        },
        searchAll: (isAll_arg) => {
            dispatch(searchAll(isAll_arg));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabMetSearch);
