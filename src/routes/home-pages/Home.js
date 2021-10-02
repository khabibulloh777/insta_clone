import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import Stories from '../../components/story/Stories'
import StoryPreview from '../../components/story-preview/StoryPreview'
import './Home.css'
import { useStateValue } from '../../context/stateprovider/StateProvider'
function Home() {
   const [{activeStory}] = useStateValue();
    return (
        <div className="home">
            <Header/>
            <div className="home__container">
              <div className="home__feed">
            <Stories/>
            <Feed/>
            </div>
            </div>
           {activeStory ?  <StoryPreview storyPreviewImage={activeStory.StoryImage}/> : <></> }
        </div>
    )
}

export default Home
