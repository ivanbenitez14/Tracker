import { useState } from "react"

const useForm  = () => {
    const [values, setValues]  = useState();

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return [values, handleChange]
}

export default useForm;