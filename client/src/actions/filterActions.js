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

export const searchAll = (isAll) => {
    return {
        type: 'SEARCH_ALL',
        isAll
    };
};