import React, {useState} from 'react';

const Form = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg', 'image/tif'];
    
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png/jpeg/jpg/svg/tif)');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
            </div>
        </form>

    );
}

export default Form;