import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useNavigate } from "react-router-dom";

function Add({ blogAdd }) {
  const navigate = useNavigate();
  const [parent] = useAutoAnimate();

  //Burada aldığımız verileri gönderiyoruz
  const handleClick = (e) => {
    e.preventDefault();
    blogAdd(e);

    e.target.blogTitle.value = "";
    e.target.blogImage.value = "";
    e.target.blogText.value = "";

    setTimeout(() => {
      navigate("/blog/");
    }, 250);
  };

  return (
    <div className="add-new-blog">
      <h1>Blog Oluşturunuz.</h1>
      <form onSubmit={handleClick} ref={parent}>
        <div className="box">
          <label htmlFor="blogTitle">Title:</label>
          <input
            type="text"
            id="blogTitle"
            placeholder="enter to title..."
            required
          />
        </div>
        <div className="box">
          <label htmlFor="blogImage">Image:</label>
          <input
            type="text"
            id="blogImage"
            placeholder="enter to title..."
            required
          />
        </div>
        <div className="box">
          <label htmlFor="blogText">Blog Text:</label>
          <textarea
            type="text"
            id="blogText"
            placeholder="enter to blog..."
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Add;
