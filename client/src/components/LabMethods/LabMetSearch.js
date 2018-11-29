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
                <div className='f_center'> 
                    <input  
                        className='lm__search_input' 
                        autoFocus 
                        type='search' 
                        name='search' 
                        value={this.props.text} 
                        placeholder='Hledej metodu...' 
                        onChange={this.textFilter}>
                    </input>                   
                    
                    <img 
                        className={!this.props.text ? 'lm__search_del lm__search_img' : 'lm__search_img'}
                        onClick={this.clearSearch} 
                        src="../../images/clear2.png" 
                        height="40px" 
                    />

                </div>


                <div className={this.noFilters() ? 'lm__search--invisible ' : undefined}>
                   <p className='lm__search_clearFilter' onClick={this.clearFilters}>HLEDAT VŠUDE</p> 
                </div>
                
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
