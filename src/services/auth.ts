const DEMO_USER = {
    email: 'gustavo@pokedex.com',
    password: '123456',
};

export function validateLogin(
    email: string,
    password: string
) : boolean {
    return email === DEMO_USER.email && password === DEMO_USER.password;
}
