import { useState, createContext} from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('weekly');

    return (
        <TimeContext.Provider value={{
            activeLink, setActiveLink
        }}>
            {children}
        </TimeContext.Provider>
    );
}

export default TimeContext;
