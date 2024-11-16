import { useState } from "react";

function Data() {
  const [post, setPost] = useState<{ addTitle: string, addBody: string }[]>([]);
  
  const [addPost, setAddPost] = useState<{ addTitle: string, addBody: string}>({addTitle: "", addBody: ""});

  const changeInput = (e) => {
    setAddPost((oldInputData) => {
      return { ...oldInputData, [e.target.name]: e.target.value };
    });
  }

  const submitData = (e) => {
    e.preventDefault(); 
    
  setPost((prevPost) => {
       return [...prevPost, addPost];
     });    
     
    setAddPost({ addTitle: "", addBody: ""});
  }

  return (
    <>
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {post.map((elem,index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{elem.addTitle}</h5>
                <p className="card-text">{elem.addBody}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>

      <div className='w-50'>
          <form>
            <div className="form-floating mb-3 ">
              <input type="text" className="form-control" name="addTitle" id="addTitle" placeholder="Title" value={addPost.addTitle} onChange={changeInput} />
              <label>Title</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="addBody" id="addBody" placeholder="Body" value={addPost.addBody} onChange={changeInput} />
              <label>Body</label>
            </div>
            <button className="btn btn-primary w-100" onClick={submitData}>Add Students</button>
          </form>
        </div>
    </div>
    </>
  );
}

export default Data;