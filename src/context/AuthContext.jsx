import { createContext, useState } from "react";
import { fetchLogin } from "../API/apiAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [credential, setCredential] = useState({ username: "", password: "" });

    const [userData, setUserData]=useState({});

    const changeCredential = (e) => {
        const { name, value } = e.target;
        setCredential({ ...credential, [name]: value });
    }

    const handleLogin = async (e) => {
        try {
            const result = await fetchLogin(credential);
            setUserData(result)
            return result.user
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <AuthContext.Provider
            value={{
                userData,
                user: credential,
                changeCredential,
                handleLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}
export { AuthProvider }

export default AuthContext;