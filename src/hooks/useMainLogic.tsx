import {useEffect, useState, useCallback, MutableRefObject, useContext} from 'react';
import {StoreContext} from "../App.tsx";

const useMainLogic = (mainRef?: MutableRefObject<HTMLDivElement | null>) => {

    const {content, columnDiv} = useContext(StoreContext);
    const [fontSize, setFontSize] = useState(0);
    const [columnHeight, setColumnHeight] = useState<number>(0);
    const [fontReady, setFontReady] = useState<string>('rerender');

    const navigateToRef = (ref: MutableRefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    };

    const handleFontSizeReady = useCallback((fontSize: number) => {
        setFontSize(fontSize);
        navigateToRef(mainRef ? mainRef : {current: null});
    }, [mainRef]);


    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontReady('ready');
            setColumnHeight(columnDiv('leftColumn')?.clientHeight);
        });
    }, [columnDiv]);

    return {
        content,
        fontSize,
        columnHeight,
        fontReady,
        handleFontSizeReady,
        navigateToRef
    };
};

export default useMainLogic;
