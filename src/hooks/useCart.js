import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedItems = getStoredCart();
        const storedItems = [];
        if (products.length) {
            for (const key in savedItems) {
                const addedItem = products.find(product => product.key === key);
                if (addedItem) {
                    const quantity = savedItems[key];
                    addedItem.quantity = quantity;
                    storedItems.push(addedItem);
                }
            }
            setCart(storedItems);
        }
    }, [products])

    return [cart, setCart];
}

export default useCart;