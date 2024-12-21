import { useEffect, useState } from "react";

export function useFetch(url, retryTime) {
    const [loading, setLoading] = useState(true);
    const [finalData, setFinalData] = useState({});

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const responseJson = await response.json();
        setFinalData(responseJson);
        setLoading(false);
    } 

    useEffect(() => {
        getDetails();
    }, [url]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getDetails();
        }, retryTime * 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [retryTime, url]);

    return {
        finalData,
        loading
    }
}