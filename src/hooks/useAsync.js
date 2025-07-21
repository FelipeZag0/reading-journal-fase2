import { useState, useEffect } from "react";

// Hook para operações assíncronas
export default function useAsync(handler, immediate = true) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState(null);

    const act = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const result = await handler(...args);
            setData(result);
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (immediate) act();
    }, []);

    return { data, loading, error, act };
}