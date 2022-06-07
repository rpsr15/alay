import { authContext } from '../hooks/useAuth'
import { useRouter } from 'next/router'
import { useState } from 'react'
// import useRequireAuth from '../hooks/useRequireAuth'
import { useContext, useEffect } from 'react'
const DashBoardPage = () => {
    let auth = useContext(authContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        console.log('here')
        if (auth.loading) {
            setLoading(auth.loading)
        } else if (auth.usr === null) {
            return router.push('/login')
        } else {
            setLoading(false)
        }
    }, [auth])

    const signOut = () => {
        auth.logOut()
    }
    return (
        <div>
            {
                loading ? <div>Loading</div> : <div className="min-h-screen flex bg-gray-200">

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="text-center mt-24">
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">

                            </h2>
                            <p className="mt-2 text-center text-md text-gray-600">

                            </p>
                        </div>
                        <div className="flex justify-center items-center h-screen">
                            <button onClick={signOut}>SignOut</button>
                        </div>
                    </div> </div>
            }
        </div>

    )
}

export default DashBoardPage