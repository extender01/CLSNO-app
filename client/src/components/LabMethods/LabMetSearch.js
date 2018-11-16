import React from 'react';
import {connect} from 'react-redux';
import {textFilter, searchAll, clearFilters} from '../../actions/filterActions';






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

    noFilters = () => {
        console.log(this.props.filters.category === 'all' && !this.props.filters.alphabet);
        
        return this.props.filters.category === 'all' && !this.props.filters.alphabet;
    }
    
    clearFilters = () => {
        this.props.clearFilters();
    }
        
    
    
    render() {
        return (
            <div className='lm__search'>
                <div className='fcent'> 
                    {/*<img className='lm__search_item' src="../../images/magnifying-glass.png" height="40px" />*/}
                    <input  className='lm__search_input' autoFocus type='search' name='search' value={this.props.text} placeholder='Hledej metodu...' onChange={this.textFilter}></input>
                    {/*<button  className='lm__search_item' value='' onClick={this.clearSearch} checked={this.props.isSearchAll}>X</button>*/}
                    
                    <img 
                        className={!this.props.text ? 'lm__search_del' : undefined}
                        onClick={this.clearSearch} 
                        src="../../images/clear2.png" 
                        height="40px" 
                    />

                </div>


                <div className={this.noFilters() ? 'lm__search_clearFilter' : undefined}>
                   <p onClick={this.clearFilters}>HLEDEJ VSUDE</p> 
                </div>
                {/* <form>    
                            <input type='checkbox' name='searchall' onChange={this.searchAll} checked={this.props.isSearchAll}></input>
                            <label htmlFor="searchall">HLEDAT VSUDE</label>
                            
                </form> */}
                
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        text: state.labTests.filters.text,
        isSearchAll: state.labTests.filters.searchAll,
        filters: state.labTests.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        textFilter: (text_arg) => {
            dispatch(textFilter(text_arg));
        },
        searchAll: (isAll_arg) => {
            dispatch(searchAll(isAll_arg));
        },
        clearFilters: () => {
            dispatch(clearFilters())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabMetSearch);
