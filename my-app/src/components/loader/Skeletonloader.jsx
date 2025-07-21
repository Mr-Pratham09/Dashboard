import { useState, useEffect } from 'react';

const SkeletonLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col gap-5">
                <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-10 w-full bg-gray-200 rounded-full animate-pulse"></div>

                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 animate-pulse">
                            <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
                            <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
                            <div className="h-6 w-1/6 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return <>
        {children}
    </>
}

export default SkeletonLoader
