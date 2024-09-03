import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form/PostForm";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import { getAllPost } from "./controllers/post";
import memories from "/memories.png";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    getAllPost(dispatch);
  }, [dispatch, currentId]);

  return (
    <div className="max-w-5xl mx-auto mt-28 w-full bg-slate-50 rounded-xl p-2 shadow-lg">
      <Navbar />
      <div className="w-full">
        <div>
          <div className="p-4 flex flex-col lg:flex-row justify-between items-stretch gap-6">
            <div className="flex-1 order-2 lg:order-1">
              <Posts posts={posts} setCurrentId={setCurrentId} />
            </div>
            <div className="basis-1/3 order-1 lg:order-2">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
