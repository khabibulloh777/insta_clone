import React from 'react'     
import './StoryCircle.css'
import { useStateValue } from '../../context/stateprovider/StateProvider'
function StoryCircle( {image}) {
    const [{activeStory}, dispatch] = useStateValue();

    const setActiveStory = () => {
        let timer = setTimeout(() => {
            dispatch({
                type: "SET_ACTIVE_STORY",
                activeStory: null
                  
            })        
        }, 5000)
        
        dispatch({
          type: "SET_ACTIVE_STORY",
          activeStory: {
              StoryImage: image, 
              timeout: timer,
              activeStory
          }
      })
    }
    return (
        <div className="bigone" onClick={setActiveStory}>
            <div className="big">
                <div className="story__circle">
                    <img src={image } alt="" />
                </div>
            </div>
            <span>Habibulloh</span>
        </div>
    )
}

export default StoryCircle
