import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

interface AppType {
  _id: number;
  name: string;
}

function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState<AppType[]>([])
  const [value,setValue] = useState("")
  const getData = async () => {
    try {
      const {data} = await axios.get("https://api-v2.elchocrud.pro/api/v1/2b8b5f628a55a06d087fe9e523212b3d/product");
      console.log(data);
      setData(data)
    } catch (e) {

      console.log(e);
    }finally{
      setIsLoading(false)
    }
  };

const postData = async () => {
  try {
    const {data} = await axios.post(
      "https://api-v2.elchocrud.pro/api/v1/2b8b5f628a55a06d087fe9e523212b3d/product",
      {name: value}
    )
    console.log(data);
    
  } catch (e) {
    console.log(e);
    
    
  }
}
useEffect(() => {
  getData()
},[])
  return <>
  <div>
    {
      isLoading ? (
        <h1>Loading..</h1>
      ) : (
        <div>

        {
          data.map((item)=> (
            <h1 key={item._id}>{item.name}</h1>
          ))
        }
        </div>
      )
    }
    <div>
<input type="text" />
<button>add</button>
    </div>
  </div>
  </>;
}

export default App;
