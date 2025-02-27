export default [
    {
        type: "Yearly",
        price: "$150.00",
        connect: "100",
        paymentGateway: "Stripe",
        paymentStatus: {
            type: "SUCCESS",
            title: "Completed"
        },
        status: {
            type: "SUCCESS",
            title: "Active"
        },
        purchaseDate: "2024-10-27",
        expiryDate: "2025-10-27"
    },
    {
        type: "Free",
        price: "$12.00",
        connect: "297",
        paymentGateway: "Wallet",
        paymentStatus: {
            type: "SUCCESS",
            title: "Completed"
        },
        status: {
            type: "SUCCESS",
            title: "Active"
        },
        purchaseDate: "2023-12-08",
        expiryDate: "2025-01-07"
    }
]

export const plans = [
    {
        type: "Free",
        connect: 20,
        benifits: ["Free for first time", "Get while register", "Must register as a freelancer", "One time get", "Use for job proposal", "Get only once", "Totally Free"]
    },
    {
        type: "Micro Offer",
        connect: 10,
        benifits: ["Connect 10", "Weekly 2", "Limit 10", "Professional", "Supported", "Less use"]
    },
    {
        type: "Professional",
        connect: 10,
        benifits: ["Connect 10", "Monthly support", "Professional", "List type", "New feature", "Long term", "Healthy usecase"]
    },
    {
        type: "Professional",
        connect: 100,
        benifits: ["Connect 100", "Yearly system", "Less use", "Professional", "One time get", "Monthly support", "New policy"]
    },
    {
        type: "Starter",
        connect: 5,
        benifits: ["Monthly support", "Lifetime", "Professional"]
    },
    {
        type: "Standard",
        connect: 60,
        benifits: ["Yearly system", "Professional", "Usefull", "Less price", "Low cost"]
    }
]