/* eslint-disable react/prop-types */

const User = ({user}) => {
    const {name, email, username} = user;
    return (
        <div className="border-2 rounded-xl border-blue-600 border-solid p-5 my-5 mr-3">
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;