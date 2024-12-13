import PropTypes from 'prop-types';
import { useState } from 'react';

const CardMenu = ({
    onAddToCart,
    menu,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className="">
            <div className="">
                <div className="card">
                    <div className="h-20">
                        <div className="imgMenus ">
                            <img src={`../assets/${menu.image_url}`} alt={menu.name} />
                        </div>
                        <div className="text-right py-4 pr-2 flex justify-end items-center gap-2">
                            <span className="material-symbols-rounded text-yellow-500 text-sm">
                                kid_star
                            </span>
                            <p className='text-xs font-semibold text-darkGrey'>{menu.rating}/5</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 px-2">
                        <div className="titleCard">
                            <p className='font-semibold'>{menu.name}</p>
                        </div>
                        <div className="priceMenu text-sm font-medium text-darkGrey/50 flex items-center justify-between mb-2">
                            Rp{menu.price}
                            <span className='text-xs font-medium text-darkGrey'>{menu.taste}</span>
                        </div>
                        <div className="flex gap-2 justify-between items-center mb-5 w-full">
                            <button onClick={() => {onAddToCart(menu);}} className="addCart w-full border-darkGrey border-2 px-4 py-2 text-sm text-darkGrey rounded-lg font-semibold active:bg-darkGrey active:text-white hover:bg-darkGrey hover:text-white focus:outline-none focus:ring-1 focus:ring-whiteGrey focus:bg-darkGrey focus:text-white">
                                Add
                            </button>
                            <button onClick={toggleModal} className="addDetail w-full bg-green-700 border-2 px-4 py-2 text-sm text-white rounded-lg font-semibold hover:bg-green-900 hover:text-white ">
                                Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                >
                    <div className="relative p-8 w-full max-w-xl bg-white rounded-lg shadow ">
                        <div className="flex items-center justify-between ">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {menu.name}
                            </h3>
                            <button
                                onClick={toggleModal}
                                className="text-darkGrey"
                            >
                                <span className='material-symbols-rounded'>close</span>
                            </button>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="py-4 space-y-2 text-sm w-[70%]">
                                <p>Category : {menu.category}</p>
                                <p>Price : Rp{menu.price}</p>
                                <p className='text-justify pr-5'>Description : {menu.description}</p>
                            </div>
                            <img src={`../assets/${menu.image_url}`} width={150} className='img-modal' />
                        </div>
                        <div className="flex gap-2 items-center justify-between py-2">
                            <button onClick={() => {onAddToCart(menu);}} className="addCart w-full border-darkGrey border-2 px-4 py-2 text-sm text-darkGrey rounded-lg font-semibold active:bg-darkGrey active:text-white hover:bg-darkGrey hover:text-white focus:outline-none focus:ring-1 focus:ring-whiteGrey focus:bg-darkGrey focus:text-white">
                                Add
                            </button>
                            <button onClick={toggleModal} className="addDetail w-full bg-red-700 border-2 px-4 py-2 text-sm text-white rounded-lg font-semibold hover:bg-red-900 hover:text-white ">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CardMenu