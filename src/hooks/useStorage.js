import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name);
        const uploadImage = uploadBytesResumable(storageRef, file);

        uploadImage.on('state_changed', (snap) => {
            let percentage = (snap.byytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err);
        }, async () => {
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                console.log(url);
            });
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;