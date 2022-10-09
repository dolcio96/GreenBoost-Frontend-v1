/*import { withAuth } from "next-auth/middleware"
//export {default} from 'next-auth/middleware'

export const config = { matcher: ['/profile'] }

export default withAuth(
    function middleware() {
        //return next response
    },
    {

        callbacks: {
            authorized({ token }) {
                return token?.role === 'admin'
            }
        }



    }


)*/
export {default} from 'next-auth/middleware'
export const config = { matcher: ['/profile'] }