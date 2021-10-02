import React, {useEffect, useState} from 'react'
import StoryCircle from '../story-circle/StoryCircle'
import { database } from '../../server/firabase'
import './Stories.css'
function Stories() {
    const [allStories, setAllStories] = useState([])

    useEffect (() =>{
        database.collection("stories").onSnapshot(allStories => {
            setAllStories(
                allStories?.docs.map(story =>( {
                    uniqueId: story.id,
                    data: story.data()
                }))[0]?.data.storyImages
            )
        })
    }, [])
    console.log(allStories)
    return (
        <div className="home__story">       
         <div className="home__story2">
           {
               allStories?.map((story, id) => 
                 <StoryCircle key={id} image={story}/>
                )
           }
             </div>
        </div>
    )
}

export default Stories
