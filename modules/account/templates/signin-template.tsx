//import { useAccount } from "@lib/context/account-context"
//import Register from "@modules/account/components/register"
import Signin from "@modules/account/components/signin"
import { useRouter } from "next/router"
import { useEffect } from "react"


const SigninTemplate = () => {
 /* const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])
*/
  return (
    <div className="w-full flex justify-center py-24">
      <Signin /> 
    </div>
  )
}

export default SigninTemplate
