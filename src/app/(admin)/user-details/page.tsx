import { validateRequest } from "@/auth"

export default async function Page(){
    const {user} = await validateRequest()
    return <pre>{JSON.stringify(user,null,2)}</pre>
}