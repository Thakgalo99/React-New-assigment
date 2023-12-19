const mockData = [
    {
        name: "Barry Johnson",
        age: 40,
    },
    {
        name: "Chris Evan",
        age: 35,
    },
    {
        name: "Teresa Middleton",
        age: 27,
    }
];

const getAll = () => {
    return mockData;
};

const addListing = (name, age) => {
    const listing = {
        name,
        age,
    };
    return listing;
};

export default {
    getAll,
    addListing,
};