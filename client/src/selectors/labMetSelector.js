
//just function that uses and filters redux data when called from mapStateToProps in component
const labMetSelector = (labMet, filter) => {

    //goes through lab tests object and check if each passes through filtering conditions
    return labMet.filter((item) => {
       
        // boolean if test name starts with selected letter or with number or if alphabet filter is not selected
        const byAlphabet = item.name.charAt(0) === filter.alphabet || (!isNaN(item.name.charAt(0)) && filter.alphabet === '0-9') || filter.alphabet === '';

        //boolean if test is in selected category or if no category is selected
        const byCategory = item.category === filter.category || filter.category === 'all';

        //if name or synonyme contains string from input (byTextSyn is fuction beacuse we must check if syn exists)
        const byTextName = accentFold(item.name.toLowerCase()).includes(filter.text.toLowerCase());
        const byTextSyn = () => {
            if(item.syn) {
                return accentFold(item.syn.toLowerCase()).includes(accentFold(filter.text.toLowerCase()));
            } else {
                return false;
            }
        };
        
        const byText = byTextName || byTextSyn();

        
        
        return byCategory && byAlphabet && byText;
        
        
    }).sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else if ( a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }

        return 0;
    });
};

export const accentFold = (str) => {   //převede string s diakritikou na string bez
    if (!str) return '';
    const accentMap = {
        'á':'a',
        'é':'e',
        'í':'i',
        'ó':'o',
        'ú':'u',
        'ě': 'e',
        'š': 's',
        'č': 'c',
        'ř': 'r',
        'ž': 'z',
        'ý': 'y'
    };
    let bezDia = '';
    for (let i = 0; i < str.length; i++) {
        bezDia += accentMap[str.charAt(i)] || str.charAt(i);
    };
    return bezDia
};

export default labMetSelector;