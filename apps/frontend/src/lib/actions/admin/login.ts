'use server'
export async function loginAdmin(data: FormData) {
    const body = {
        email: data.get('email'),
        password: data.get('password'),
    }
    const fetchLogin = await fetch('http://localhost:4000/admin/login', {
        method: "POST",
        body: JSON.stringify(body)
    })
    const result = await fetchLogin.json()
    console.log(body, result)
}