import { useCallback } from "react"
import { PaymentFormValidator } from "../Utils/validator"

const initial = {
    card_holder_name: '',
    card_number: '',
    cvv_number: '',
    expiry_date: '',
}

const useSubscriptionController = () => {

    const onSubmit = useCallback((data: any) => {

    }, [])

    return {
        validator: PaymentFormValidator,
        values: {
            initial
        },
        functions: {
            onSubmit
        }
    }

}

export default useSubscriptionController