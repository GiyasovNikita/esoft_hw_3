import React, { useState, useEffect } from 'react';

import SkillCard from "./SkillCard";
import CardButton from "./CardButton";
import skillsData from "../assets/skillsData.json";

const CardTable = () => {
    const [skills, setSkills] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState(null);

    const switchLearned = (id) => {
        setSkills(skills.map(skill =>
          skill.id === id ? { ...skill, learned: !skill.learned } : skill
        ));
    };

    useEffect(() => {
        setSkills(skillsData.skills);
    }, []);    

    const filteredSkills = skills.filter(skill => {
        if (filter === 'above50') return skill.progress > 50;
        if (filter === 'below50') return skill.progress < 50;
        return true;
    });

    return (
        <>
            <CardButton
                text={isVisible ? 'Hide skills' : 'Show skills'}
                onClick={() => setIsVisible(!isVisible)}
            />
            {isVisible && (
                <>
                    <CardButton text={"More than 50%"} onClick={() => setFilter('above50')} />
                    <CardButton text={"Less than 50%"} onClick={() => setFilter('below50')} />
                    <div className='cardTable'>
                        {filteredSkills.map(skill => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                onSwitchLearned={switchLearned}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    )

}

export default CardTable