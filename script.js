// --------GET-------
axios.get('https://dummyjson.com/products')
    .then(res => {
        console.log(res.data);
    })

// -------POST-------
var newPoduct = {
    title: 'Hello',
    description: 'Hello',
    price: 10,
    discountPercentage: 10,
};

axios.post('https://dummyjson.com/products/add', newPoduct)
    .then(res => {
        console.log(res.data);
    })

// --------PUT-------

var upProduct = {
    title: 'Bye',
};

axios.put('https://dummyjson.com/products/1', upProduct)
    .then(res => {
        console.log(res.data);
    })

// ------DELETE------
axios.delete('https://dummyjson.com/products/1')
    .then(res => {
        console.log(res.data);
    })axios.get('https://dummyjson.com/products')
    .then(res => {
        console.log(res.data);
    }) 
