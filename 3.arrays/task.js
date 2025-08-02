function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every((value, index) => {
        return value === arr2[index];
    });  
}

function getUsersNamesInAgeRange(users, gender) {
    const usersFiltered = Array.from(users.filter(user => user.gender === gender).map(user => user.age));
    if (usersFiltered.length === 0) return 0;
    const ageSum = usersFiltered.reduce((sum, age) => sum + age, 0);
    return ageSum / usersFiltered.length;
}