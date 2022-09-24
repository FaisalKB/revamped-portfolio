import React from "react";
import ProjectHeadersLinks from "../Components/ProjectHeadersLinks";
import WelcomeCard from "../Components/WelcomeCard";
import SocialMediaNav from "../Components/SocialMediaNav";

function HomePage(){
    return (
        <>
        <div className='row mt-5'>
            <div className="col">
            <WelcomeCard />
            </div>
            <div className="col">
                <ProjectHeadersLinks />
                <SocialMediaNav />    
            </div>
        </div>
<br/>
</>
    )
}

export default HomePage