import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { removeOrder } from "../store/slice/sliceSamsa";

export default function Profile() {
  const orders = useSelector((state: RootState) => state.samsas.orders);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Buyurtmalar
      </h1>
      {orders.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Hozircha buyurtma yo‘q.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {orders.map((o) => (
            <div
              key={o.id}
              className="border p-3 rounded-md bg-white dark:bg-gray-800 shadow-sm"
            >
              <img
                src={o.image}
                alt={o.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                {o.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {o.description}
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {o.price} x {o.quantity} = {o.price * o.quantity} so'm
              </p>
              <button
                onClick={() => dispatch(removeOrder(o.id))}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2 w-full"
              >
                Buyurtmani bekor qilish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
