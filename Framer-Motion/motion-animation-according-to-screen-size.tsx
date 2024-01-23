const YourComponent = () => {
  // State untuk menyimpan lebar layar saat ini
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect untuk menangani peristiwa resize window
  useEffect(() => {
    // Fungsi untuk memperbarui screenWidth saat resize window
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener untuk resize window
    window.addEventListener('resize', handleResize);

    // Fungsi pembersihan untuk menghapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array dependency kosong berarti efek ini berjalan sekali setelah render awal

  return (
    <>
      {screenWidth >= 400 ? (
        // Tampilan B: Ditampilkan saat lebar layar lebih besar atau sama dengan 400 piksel
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          // Properti animasi lainnya untuk tampilan B
        >
          {/* Konten untuk tampilan B */}
        </motion.div>
      ) : (
        // Tampilan A: Ditampilkan saat lebar layar kurang dari 400 piksel
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          // Properti animasi untuk tampilan A
        >
          {/* Konten untuk tampilan A */}
        </motion.div>
      )}
    </>
  );
};

export default YourComponent;
