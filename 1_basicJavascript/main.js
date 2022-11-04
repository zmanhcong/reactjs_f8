// Destructurning : phan ra
var course = {
    name : 'Jacascript',
    price: 1000,
    image: "image-address",
    children: {
        name: "React",
    }
};
var {name:parentName, children:{name:childrenName}} = course;
console.log(parentName, childrenName);
console.log(parentName, childrenName);

