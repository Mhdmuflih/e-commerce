export const orderPorduct = async(req, res) => {
    try {
        const {orderId,productName,paymentMethod} = req.body;
    } catch (error) {
        console.log("error", error.message);
    }
}