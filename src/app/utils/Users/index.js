'use server'

export const login = async (username, password) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

        const data = await response.json();

        return (data)

    } catch (error) {
        console.log("Error in utils/users/login: ", error);
        return error;
    }
}

export const register = async (username, password) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/register`, {
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

export async function getUser() {
    //Next object argument sets data revalidation time in seconds
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth`, {
            method: "GET",
            next: {
                revalidate: 0 //Using 0 opts our of using cache
            }
        })

        const data = await res.json()
        return data
    } catch (error) {
        const errorMessage = "error in getUser()"
        console.log(errorMessage)
        return { error: errorMessage }
    }

}