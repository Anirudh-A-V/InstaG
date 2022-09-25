import React, {useState} from 'react';
import useStorage from '../hooks/useStorage';

const Progress = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(progress, url);

    
    return (
        <div className="progress-bar">
        </div>
    );
}

export default Progress;