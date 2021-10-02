import React, {useState} from 'react'
import './Post.css'
import {BsThreeDots, BsHeart} from 'react-icons/bs'
import { BiBookmark } from 'react-icons/bi'
import {FaRegComment, FaTelegramPlane} from 'react-icons/fa'
import { ImEllo} from 'react-icons/im'
function Post( {accountImage, posts}) {
  const [previewInfo, setPreviewInfo] = useState(null);
  const handlePreview = () => {
    setPreviewInfo(posts)

  }
  return (
        <div className="post">
          <div className="head">
           <img src="https://thumbs.dreamstime.com/z/soccer-ball-futbol-grass-black-white-traditional-football-57375050.jpg" alt="" 
           onMouseOver={handlePreview}
           onMouseOut={() => setPreviewInfo(null)}
           /> 
          {previewInfo? <div className="preview">
            {
              previewInfo?.map(image => (
                <>
                <div className="imgPost">
                <img src="https://thumbs.dreamstime.com/z/soccer-ball-futbol-grass-black-white-traditional-football-57375050.jpg" alt="" />
                <p>Habibulloh</p>
                </div>
                <div className="videoPost">
                <img src={image} alt=""  className="posttwo"/>
                </div>
               </>
              ))
            }
          </div>: <> </> }
           <p>Semasfdaf</p>
           <BsThreeDots/>
          </div>
          <div className="img">
              <img src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931_1280.png" alt="" />
          </div>
          <div className="layk">
             <BsHeart/>
            <FaRegComment/>
            <FaTelegramPlane/>   
            <BiBookmark/>
          </div>
          <div className="commit">
            <p>951,396 likes</p>
            <p>manchesterunited VIVA RONALDO 😍📍The Trafford</p>
            <p>#MUFC #ManUtd #CristianoRonaldo #Ronaldo</p>
            <p>View all 3,027 commets</p>
            <p>20Hours ago</p>
          </div>
          <div className="input">
            <ImEllo/>
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
    )
}

export default Post
