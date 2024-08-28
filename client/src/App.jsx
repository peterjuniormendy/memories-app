import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form/PostForm";
import Posts from "./components/Posts/Posts";
import { addPost } from "./slice/postSlice";
import memories from "/memories.png";

function App() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch;
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto mt-28 w-full bg-slate-50 rounded-xl p-2 shadow-lg">
      <div className="w-full p-4 flex gap-3 items-center justify-center static bg-inherit">
        <h1 className="text-black text-5xl">Memories</h1>
        <img
          className="image"
          src={memories}
          alt="memories"
          height="60"
          width="60"
        />
      </div>
      <div className="w-full">
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4">
            <div className="flex-1">
              <Posts />
            </div>
            <div className="basis-1/3">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
