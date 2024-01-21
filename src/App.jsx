
import { Outlet, useParams } from "react-router-dom";
import "./style.css";

function App() {
   const params = useParams()
   console.log(params);
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
