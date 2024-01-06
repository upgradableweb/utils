import { useEffect } from "react"

export default function useBody(open) {
    useEffect(() => {
        const { scrollHeight, clientHeight } = document.body
        const width = window.innerWidth
        if (open) {
            document.body.style = `overflow:hidden; ${width && scrollHeight > clientHeight ? 'padding-right:16px;' : ''}`
        } else {
            document.body.style = ''
        }
    }, [open])
}
