'use server'

export const login = async (username, password) => {
    try {
        const response = await fetch(`${process.env.API_URL}api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

        const data = await response.json();
        console.log("data in utils = ", data)

        return (data)

    } catch (error) {
        console.log("Error in utils/users/login: ", error);
        return error;
    }
}

export const register = async (username, password) => {
    try {
        const response = await fetch(`${process.env.API_URL}api/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

        const data = await response.json();

        return (data);

    } catch (error) {
        console.log("Error in utils/users/register: ", error);
        return error;
    }
}