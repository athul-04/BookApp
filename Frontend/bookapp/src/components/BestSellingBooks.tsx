import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shiftArray = (arr:any) => {
    if (arr.length === 0) return arr;
    const [first, ...rest] = arr;
    return [...rest, first];
};

export default function BestSellingBooks() {
    const [bestSellers, setBestSellers] = useState([
        {
          "title": "A Light in the ...",
          "price": "51.77",
          "image_url": "https://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
          "id": "c922"
        },
        {
          "title": "Tipping the Velvet",
          "price": "53.74",
          "image_url": "https://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
          "id": "6ceb"
        },
        {
          "title": "Soumission",
          "price": "50.10",
          "image_url": "https://books.toscrape.com/media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg",
          "id": "7b31"
        },
        {
          "title": "Sharp Objects",
          "price": "47.82",
          "image_url": "https://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg",
          "id": "e508"
        },
        {
          "title": "Sapiens: A Brief History ...",
          "price": "54.23",
          "image_url": "https://books.toscrape.com/media/cache/be/a5/bea5697f2534a2f86a3ef27b5a8c12a6.jpg",
          "id": "4bd6"
        }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
          setBestSellers((prev) => shiftArray(prev));
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='flex flex-col justify-center gap-5 h-screen items-center p-5'>
            <AnimatePresence>
                {bestSellers.map((book:any) => (
                    <motion.div
                        key={book.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className='w-80 text-center border-2 p-3 mx-3 rounded-2xl shadow-xl bg-white hover:scale-105'
                    >
                        <div className='flex justify-between items-center'>
                            <img src={book.image_url} alt="" className='w-24 h-28 object-contain' />
                            <p className='ml-4 font-semibold'>{book.title}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
