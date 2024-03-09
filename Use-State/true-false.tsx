import { useState } from 'react';

export default function YourComponent() {
  // State untuk menyimpan nilai boolean
  const [isToggle, setToggle] = useState(false);

  // Fungsi untuk mengganti nilai boolean
  const toggleValue = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <h1>Next.js useState Example</h1>
      <p>Nilai boolean saat ini: {isToggle.toString()}</p>
      <button onClick={toggleValue}>Toggle Nilai</button>
    </div>
  );
}
