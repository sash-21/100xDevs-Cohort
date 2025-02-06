interface UserData {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
};

type UserProfile = Pick<UserData, 'id' | 'name' | 'email' | 'age'>;

function displayUserProfile(user: UserProfile): void {
    console.log(`UserID: ${user.id} \nName: ${user.name} \nEmail: ${user.email} \nAge: ${user.age}`);
}

displayUserProfile({
    id: 21,
    name: "Sahil",
    email: "sahilshah2104@gmail.com",
    age: 22
});