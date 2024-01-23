const YourComponent = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <>
        {screenWidth >= 400 ? (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            // Your other motion properties for view B
          >
            {/* Content for view B */}
          </motion.div>
        ) : (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            // Your motion properties for view A
          >
            {/* Content for view A */}
          </motion.div>
        )}
      </>
    );
  };
  
  export default YourComponent;