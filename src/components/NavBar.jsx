// import { useState } from "react";

/* eslint-disable react/prop-types */
const NavBar = ({
    cart, setSearch
}) => {
    function qtyCount(name) {
        // reduce digunakan untuk membuat array baru namun tunggal
        const total = cart.reduce((count, item) => {
            return item.name === name ? count + 1 : count;
        }, 0);
        return total;
    }

    function groupCart(cart) {
        return cart.reduce((acc, item) => {
            const existingItem = acc.find((i) => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);
    }

    const groupedItems = groupCart(cart);

    function calculateTotalPrice(groupedItems) {
        return groupedItems.reduce((total, item) => {
            return total + item.price * item.quantity; 
        }, 0);
    }

    return (
        <>
            <div className="container mx-auto py-4">
                <div className="">
                    <div className="flex flex-row items-center justify-between">
                        <div className="">
                            <p className="headline-2">MenOur</p>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="">
                                <form className="search-input">
                                    <input type="text" name="" id="" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                                    <button className='material-symbols-rounded' aria-hidden="true">Search</button>
                                </form>
                            </div>
                            <button className="addToCart-button" type="button" data-drawer-target="cart-offcanvas" data-drawer-show="cart-offcanvas" aria-controls="cart-offcanvas">
                                Cart
                                <span className='material-symbols-rounded icon-cart' aria-hidden="true">Shopping_cart
                                    <span className="numbers-cart">{cart.length}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cart-offcanvas" className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80 " tabIndex="-1" aria-labelledby="drawer-label">
                <div className="p-4">
                    <h2 id="drawer-label" className="headline-6">List Cart</h2>
                    <button type="button" data-drawer-hide="cart-offcanvas" aria-controls="cart-offcanvas" className="text-darkGrey bg-transparent hover:bg-darkGrey/50 hover:text-white rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center" >
                        <span className='material-symbols-rounded'>close</span>
                    </button>
                    <div className="flex flex-col gap-2 mb-12">
                        {groupedItems.map((cartItems, index) => (
                            <div className="cartList" key={index}>
                                <img src={`../assets/${cartItems.image_url}`} alt={cartItems.name} className="min-w-[100px] max-h-[100px] bg-cover" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex flex-col">
                                        <p className="headline-4 leading-tight">{cartItems.name}</p>
                                        <p className="text-xs font-semibold mt-[-3px]">{cartItems.category}</p>
                                        <p className="text-sm mt-2 flex flex-row items-center">
                                            <p className="material-symbols-rounded text-yellow-500 text-sm">
                                                kid_star
                                            </p>
                                            {cartItems.rating}/5</p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <p className="headline-5">Rp{cartItems.price}</p>
                                        <p className="text-xs ">
                                            Qty : {qtyCount(cartItems.name)}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {cart.length == 0 ? "" : <div className="fixed w-80 bottom-0 h-14 py-4 px-4 bg-darkGrey text-white font-semibold rounded-t-2xl text border-t-4 border-white">
                    <div className=" flex flex-row justify-between">
                        <p>Total Price </p>
                        <span className="text-right">{calculateTotalPrice(groupedItems)}</span>
                    </div>

                </div>}
            </div>
        </>
    )
}

export default NavBar