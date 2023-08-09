import {useEffect, useState} from 'react';
import smallStars from "../assets/stars";
import {isMobile} from "react-device-detect";


function useBottomLogic() {
    const tokens = ['ETH', 'ARB', 'OPTI', 'ZKNOVA', 'ZKEVM'];
    const statuses = ['bridge in progress', 'bridge completed', 'the star burned out'];

    const [currentToken, setCurrentToken] = useState<string>();
    const [fontSize, setFontSize] = useState(1);
    const [current, setCurrent] = useState<number>(getRandomIndex(smallStars));
    const bottomMax = window.innerWidth >= 5120 ? 120 : isMobile ? 22 : 42;


    const stats = {
        iteration: ` # ${current}`,
        status: `: ${statuses[getRandomIndex(statuses) - 1].toUpperCase()}`,
        view: ` YOUR STAR`
    }

    const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUpOpen = () => {
        setShowPopUp(true);
    };

    const handlePopUpClose = () => {
        setShowPopUp(false);
    };

    function getRandomIndex(array: string[]) {
        return Math.floor(Math.random() * array.length) + 1;
    }

    const handleArrowClick = (direction: "<" | ">") => {
        setCurrent(prevState => {
            const nextValue = direction === ">" ? prevState + 1 : prevState - 1;
            return nextValue >= 1 && nextValue <= smallStars.length ? nextValue : prevState;
        });
    };

    const handleTitleReady = (fontSize: number) => {
        setFontSize(fontSize - fontSize * 0.5);
    }


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleArrowClick('<');
            } else if (event.key === 'ArrowRight') {
                handleArrowClick('>');
            }
            handlePopUpClose();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showPopUp]);

    return {
        currentToken,
        setCurrentToken,
        tokens,
        fontSize,
        current,
        stats,
        bottomMax,
        handleArrowClick,
        handleTitleReady,
        showPopUp,
        handlePopUpOpen,
        handlePopUpClose
    };
}

export default useBottomLogic;
