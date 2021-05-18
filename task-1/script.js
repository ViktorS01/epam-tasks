'use strict';

const deepCopy = function (object){
    const copyObject = {};
    let copyArr = [];

    for (let key in object){

        if (Array.isArray(object[key])){
            
            copyArr = [...object[key]];
        
            copyArr.forEach(function (item) {
                copyObject[key] = deepCopy(item);
            });
            copyObject[key] = copyArr;
        }

        else if (object[key] instanceof Object && typeof object[key] !== 'function'){
            copyObject[key] = deepCopy(object[key]);

        } else {
            copyObject[key] = object[key];
        }
    }

    return copyObject;
};
