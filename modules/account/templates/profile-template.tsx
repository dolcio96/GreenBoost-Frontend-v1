//import { useAccount } from "@lib/context/account-context"
//import Register from "@modules/account/components/register"
import Profile from "@modules/account/components/profile"
import { useRouter } from "next/router"
import { useEffect } from "react"


const ProfileTemplate = () => {
    return (
        <div className="w-full flex justify-center py-24">
            <Profile />
        </div>
    )
}

export default ProfileTemplate
