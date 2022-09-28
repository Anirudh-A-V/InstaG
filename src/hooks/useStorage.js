import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [time, setTime] = useState(null);

    
    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');

        const uploadImage = uploadBytesResumable(storageRef, file);

        getMetadata(storageRef)
            .then((metadata) => {
                // console.log(metadata);
                // setTime(metadata['timeCreated']);
                const timeVar = metadata['timeCreated'];
                console.log(timeVar);
                setTime(timeVar);
            })
            .catch((error) => {
                console.log(error);
            });

        uploadImage.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadImage.snapshot.ref).then((URL) => {
                console.log(URL);
            });
            const createdAt = time;
            const data = {
                url: url,
                createdAt: createdAt
            }
            await addDoc(collectionRef, data)
                .then(docRef => {
                    console.log("Document has been added successfully");
                })
                .catch(error => {
                    console.log(error);
                })
            setUrl(url);
        })
    }, [file], time, setUrl, setTime);

    return { progress, url, error }
}

export default useStorage;