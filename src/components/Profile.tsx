import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext)
    return (
        <div className={style.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/43815186?s=400&v=4" alt=""/>
            <div>
                <strong>Nelson Amaral</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    LEVEL {level}
                </p>
            </div>
        </div>
    );
}