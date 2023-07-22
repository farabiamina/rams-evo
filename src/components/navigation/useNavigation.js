import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToAnchor = (target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            console.log(targetElement.offsetTop);
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop + 100,
                    behavior: 'smooth',
                });
            }, 100);
        }
    };

    const hashAnchor = () => {
        if (location.hash) {
            const target = window.location.hash;
            scrollToAnchor(target);
        }
    };

    useEffect(() => {
        hashAnchor();
    }, []);

    useEffect(() => {
        window.addEventListener('hashchange', hashAnchor);
        return () => {
            window.removeEventListener('hashchange', hashAnchor);
        };
    }, []);

    const handleAnchorLinkClick = (event, target) => {
        event.preventDefault();
        navigate(target);
        scrollToAnchor(target);
    };

    return {
        handleAnchorLinkClick,
        scrollToAnchor,
    };
};

export default useNavigation;
