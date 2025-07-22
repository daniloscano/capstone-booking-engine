import {create} from "zustand";

const usePaymentFormStore = create((set => (
    {
        paymentType: '',
        amount: 0,
        isCompleted: false,
        completedDate: null,
        setPaymentType: (paymentType) => set({paymentType}),
        setAmount: (amount) => set({amount}),
        setIsCompleted: (isCompleted) => set({isCompleted}),
        setCompletedDate: (completedDate) => set({completedDate}),
    }
)))

export default usePaymentFormStore;