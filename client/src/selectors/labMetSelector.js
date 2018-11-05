

const labMetSelector = (labMet, filter) => {
    if (filter === 'ext') {
        return labMet.filter((item) => {
            if(item.isExt === 'external') {
                return true;
            } else {
                return false;
            }
            
        });
    } else if (filter === 'int') {
        return labMet.filter((item) => {
            if(item.isExt === 'internal') {
                return true;
            } else {
                return false;
            }
            
        });
    } else {
        return labMet;
    }
    
};

export default labMetSelector;