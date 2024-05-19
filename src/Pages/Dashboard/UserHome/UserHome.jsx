import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-3xl">
            <span>Hi Welcome back</span>
            </h1>
            {
                user?.displayName? user.displayName : 'back'
            }
        </div>
    );
};

export default UserHome;