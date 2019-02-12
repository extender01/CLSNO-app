export const categoryFilter = (category) => {
    return {
        type: 'CATEGORY_FILTER',
        category
    };
};

export const alphabetFilter = (alphabet) => {
    return {
        type: 'ALPHABET_FILTER',
        alphabet
    };
};

export const textFilter = (text) => {
    return {
        type: 'TEXT_FILTER',
        text
    };
};


export const statimFilter = (statim) => {
    return {
        type: 'STATIM_FILTER',
        statim
    };
};

export const erFilter = (er) => {
    return {
        type: 'ER_FILTER',
        er
    };
};

export const additionalFilter = (additional) => {
    return {
        type: 'ADDITIONAL_FILTER',
        additional
    };
};

// export const searchAll = (isAll) => {
//     return {
//         type: 'SEARCH_ALL',
//         isAll
//     };
// };

export const clearFilters = () => {
    return {
        type: 'CLEAR_FILTERS'     
    };
};