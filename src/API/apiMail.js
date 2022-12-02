export const fetchSendMail = async (message) => {
    try {
        const response = await fetch("https://fcback-production.up.railway.app/mail", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message),
        })
        const data = await response.json();
        console.log(data);
        if (data) return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetMail=async()=>{
    try {
        const response = await fetch("https://fcback-production.up.railway.app/mail", {
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