
//just function that uses and filters redux data when called from mapStateToProps in component
const labMetSelector = (labMet, filter) => {

    //goes through lab tests object and check if each passes through filtering conditions
    return labMet.filter((item) => {
       
        // boolean if test name starts with selected letter or with number or if alphabet filter is not selected
        const byAlphabet = item.name.charAt(0) === filter.alphabet || (!isNaN(item.name.charAt(0)) && filter.alphabet === '0-9') || filter.alphabet === '';

        //boolean if test is in selected category or if no category is selected
        const byCategory = item.isExt === filter.category || filter.category === 'all';

        //if name or synonyme contains string from input (byTextSyn is fuction beacuse we must check if syn exists)
        const byTextName = item.name.toLowerCase().includes(filter.text.toLowerCase());
        const byTextSyn = () => {
            if(item.syn) {
                return item.syn.toLowerCase().includes(filter.text.toLowerCase());
            } else {
                return false;
            }
        };
        
        const byText = byTextName || byTextSyn();

        // if search all checkbox is checked, it searches all tests regardless of selected filters
        if(filter.searchAll) {
            return byText;  
        } else {
            return byCategory && byAlphabet && byText;
        }
        
    });

    
    
};

export default labMetSelector;