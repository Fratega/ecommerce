import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

// Exporto la config del modulo

export default NextAuth({
    //  Configure one or more authentication providers
    providers: [
        GithubProvider({
        clientId: 'Iv1.f79964a0a6f6e7cb',
        clienteSecret:'8543c8f98f6e60e9d348672227e9966dfc42d25b'
})
    ]
});
