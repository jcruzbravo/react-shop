import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios(API);
      setProducts(result.data);
    }

    loadData();
  }, []);

  return products;
};

export default useGetProducts;
