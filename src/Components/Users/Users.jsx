import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    return (
        <div className="text-center">
            <h2 className="text-xl font-medium">Our users: {users.length}</h2>
            <div className="grid grid-cols-3">
            {
                users.map((user) => (<User key={user.id} user={user}></User>))
            }
            </div>
        </div>
    );
};

export default Users;