
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period to showcase the animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 4-second loading demonstration

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return <LandingPage />;
};

export default App;
