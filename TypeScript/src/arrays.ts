function returnMax(numList: number[]) {
    let maxi = 0;
    for (let i = 0; i < numList.length; i++) {
        if(numList[i] > maxi) {
            maxi = numList[i]
        }
    }
    return maxi;
}

let nums: number[] = [9,4,7,2,5,8,11,1];

let maxNum = returnMax(nums);
console.log(`The max number in the array is ${maxNum}`);

// filter out the legal users
interface Users {
    name: string,
    age: number,
    country: string
};

let usersList: Users[] = [
    {
        name: "Sahil",
        age: 22,
        country: "IND"
    },
    {
        name: "Sakshi",
        age: 20,
        country: "UK"
    },
    {
        name: "Shreyas",
        age: 22,
        country: "USA"
    },
    {
        name: "Nihal",
        age: 17,
        country: "IND"
    }
];

function legalUsers(users: Users[]) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].age > 18) {
            console.log(`${users[i].name} is a legal user.`)
        } else {
            console.log(`${users[i].name} is not a legal user.`)
        }
    }
}

legalUsers(usersList);