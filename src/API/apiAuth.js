const fetchLogin = async (credentials) => {
    try {
        const response = await fetch("https://fcback-production.up.railway.app/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        })
        const data = await response.json();
        if (data) return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchSignUp = async (userData) => {
    try {
        const response = await fetch("https://fcback-production.up.railway.app/signUp", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        })
        const data = await response.json();
        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

const fetchUsers=async()=>{
    try {
        const response = await fetch("https://fcback-production.up.railway.app/users", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json();
        if (data) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchLogin,
    fetchSignUp,
    fetchUsers
}