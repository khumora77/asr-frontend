import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store"; // ❗ type bilan
import { fetchSamsas, addSamsa, updateSamsa, deleteSamsa, type Samsa } from "../store/slice/sliceSamsa";


export default function AdminSamsaPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const { samsas, loading, error } = useSelector((state: RootState) => state.samsas);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchSamsas());
  }, [dispatch]);

  const handleAdd = () => {
    if (!name || !description || !price || !image) return alert("To‘ldiring!");
    dispatch(addSamsa({ name, description, price, image }));
    setName(""); setDescription(""); setPrice(0); setImage("");
  };

  const handleUpdate = () => {
    if (!editingId) return;
    dispatch(updateSamsa({ id: editingId, name, description, price, image }));
    setEditingId(null);
    setName(""); setDescription(""); setPrice(0); setImage("");
  };

  const handleEdit = (s: Samsa) => {
    setEditingId(s.id);
    setName(s.name); setDescription(s.description); setPrice(s.price); setImage(s.image);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteSamsa(id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Samsa Admin
      </h1>

      <div className="mb-6 flex flex-col md:flex-row gap-2">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(+e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors" />

        {editingId ? (
          <button onClick={handleUpdate} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Save
          </button>
        ) : (
          <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add
          </button>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul className="space-y-3">
        {samsas.map(s => (
          <li key={s.id} className="flex justify-between items-center border p-3 rounded bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors">
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{s.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{s.description}</p>
              <p className="font-semibold">{s.price} so'm</p>
            </div>
<div className="flex gap-2">
  <button onClick={() => handleEdit(s)} className="bg-yellow-500 ...">Edit</button>
  <button onClick={() => handleDelete(s.id)} className="bg-red-600 ...">Delete</button>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
}
