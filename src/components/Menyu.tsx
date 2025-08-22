import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSamsas, addOrder } from "../store/slice/sliceSamsa";
import type { RootState, AppDispatch } from "../store";
import { useClerk, useUser } from "@clerk/clerk-react";

export default function SamsasPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { samsas, loading, error } = useSelector(
    (state: RootState) => state.samsas
  );


  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    dispatch(fetchSamsas());
  }, [dispatch]);

  const handleAdd = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleRemove = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };

  const handleOrder = (samsaId: number) => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    const samsa = samsas.find((s) => s.id === samsaId);
    if (!samsa) return;
    const quantity = quantities[samsaId] || 1;

    dispatch(addOrder({ ...samsa, quantity }));

    navigate("/profile");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Samsas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {samsas.map((s) => {
          const qty = quantities[s.id] || 1;
          return (
            <div key={s.id} className="border p-3 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <img src={s.image} alt={s.name} className="w-full h-52 object-cover rounded mb-2" />
              <h2 className="font-semibold text-gray-900 dark:text-gray-100">{s.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{s.description}</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Narxi: {s.price * qty} so'm
              </p>

              <div className="flex items-center gap-2 my-2">
                <button onClick={() => handleRemove(s.id)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                <span>{qty}</span>
                <button onClick={() => handleAdd(s.id)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
              </div>

              <button
                onClick={() => handleOrder(s.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                Buyurtma berish
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
