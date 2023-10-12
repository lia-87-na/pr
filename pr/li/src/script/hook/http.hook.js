import { useCallback, useState } from "react";

export let useHttp = () => {
   let [process, setProcess] = useState('waiting');

   let request = useCallback(async (url, method = "POST", body = null, headers = { 'Content-Type': 'application/json' }) => {

        setProcess('loading');

        try {
           let response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.ok}`);
            }

           let data = await response.json();
            setProcess('idle');
            return data;
        } catch (e) {
            setProcess('error');
            throw e;
        }
    }, []);

   let clearError = useCallback(() => {
        setProcess('waiting');
    }, []);

    return {
        request,
        clearError,
        process,
        setProcess
    }
}