import React from "react"

import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";
import SkillProgress from "./SkillProgress";

const SkillCard = ({ skill }) => {    
    return (
        <div className="skillCard">
            <SkillTitle title={skill.title}/>
            <SkillDescription description={skill.description}/>
            <SkillProgress progress={skill.progress}/>
        </div>
    );
}

export default SkillCard