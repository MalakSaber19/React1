import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import Data from '../AddPost';

const PostList = () => {
  
  const [title, setTitle] = useState<Array<any>>([]); 

  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts") .then((Data) => {

        setTitle(Data.data);
      })
      
  },[title]); 

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {title.map((index) => (
          <div className="col" key={index.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{index.title}</h5>
                <p className="card-text">{index.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <Data></Data>
    </>
  );
};

export default PostList;
