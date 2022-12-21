import { useCallback, useEffect, useState } from "react"

export const LoginStatus = () => {
    const [isLogin, setIsLogin] = useState(false)

    const fetchLoginStatus = useCallback(async () => {
        const body = await fetch('/login')
        const data = await body.json()
        setIsLogin(data.isLogin)
    }, [])

    useEffect(() => {
        fetchLoginStatus()
    }, [fetchLoginStatus])

    return isLogin ? (
        <p className="tw-text-green-600">Login!</p>
    ) : (
        <p className={"tw-text-red-600"}>Not Login!</p>
    )
}