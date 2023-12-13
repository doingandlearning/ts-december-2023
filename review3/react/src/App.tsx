import React, { useState } from 'react';
import { Category, ApiResponse } from './types';
import { fetchData } from './api';

function App() {
  const [category, setCategory] = useState<Category>(Category.People);
  const [id, setId] = useState<string>('1');
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string>('');

  const handleFetch = async () => {
    try {
      const result = await fetchData(category, id);
      setData(result);
      setError('');
    } catch (err) {
      setData(null);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
        {Object.values(Category).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleFetch}>Fetch Data</button>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
