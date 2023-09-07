import {FC, MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import * as S from "./StyledMain";
import MainStar from "../../components/MainStar/MainStar";
import {mainMiddleColumn} from "../../stores/static";
import {observer} from "mobx-react-lite";
import {usePrepareZeroStarsMint, useZeroStarsMint} from "../../contracts/contract";
import {zkSyncTestnet} from "wagmi/chains";
import {parseEther} from "viem";
import {useSwitchNetwork, useWaitForTransaction} from "wagmi";
import useMainLogic from "../../hooks/useMainLogic";
import useInput from "../../hooks/useInput";
import {StoreContext} from "../../App.tsx";

type MainProps = {
    topRef: MutableRefObject<HTMLDivElement | null>;
    bottomRef: MutableRefObject<HTMLDivElement | null>;
};

const Main: FC<MainProps> = observer(({topRef, bottomRef}) => {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const {status, shortenedAddress, disconnect, chain, open} = useContext(StoreContext);
    const {switchNetwork} = useSwitchNetwork();
    const [isMinted, setIsMinted] = useState(false);

    const handleStarClick = () => {
        if (status === 'connected') {
            if (chain?.id !== 280) {
                switchNetwork?.(280);
            } else {
                write?.();
            }
        } else {
            open?.();
        }
    };

    const {
        content,
        fontSize,
        columnHeight,
        handleFontSizeReady,
        navigateToRef,
        fontReady
    } = useMainLogic(mainRef);

    const {
        inputValue,
        handleInputChange,
        inputRef
    } = useInput(handleStarClick, status, navigateToRef);

    const {config} = usePrepareZeroStarsMint({
        chainId: zkSyncTestnet.id,
        args: [BigInt(inputValue)],
        value: parseEther((Number(inputValue) * 0.001).toString())
    });

    const {
        data: mintData,
        write
    } = useZeroStarsMint(config);

    const {isSuccess} = useWaitForTransaction({
        hash: mintData?.hash
    });

    useEffect(() => {
        if (isSuccess) {
            setIsMinted(true);
            setTimeout(() => {
                setIsMinted(false);
            }, 3000);
        }
    }, [isSuccess]);

    return (
        <S.Wrapper key={fontReady} ref={mainRef}>
            <S.Column id="leftColumn" onReady={handleFontSizeReady}>
                {content.leftColumn}
            </S.Column>
            <S.MiddleColumnWrapper>
                <S.MiddleColumn maxHeight={columnHeight} fontSize={fontSize}>
                    <S.Nav onClick={() => navigateToRef(topRef)}>{mainMiddleColumn.top}</S.Nav>
                    <MainStar onClick={handleStarClick}/>
                    <S.InputWrapper>
                        <S.Input
                            onClick={handleStarClick}
                            wider={inputValue.length === 2}
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleInputChange}
                            fontSize={3 * fontSize}
                            placeholder={inputValue}
                        />
                        <div id={'mint'} style={{fontSize: 3 * fontSize}}>/10</div>
                    </S.InputWrapper>
                    {isMinted && `success`}
                    <div onClick={() => disconnect?.()}>{shortenedAddress}</div>
                    <S.Nav onClick={() => navigateToRef(bottomRef)}>{mainMiddleColumn.bottom}</S.Nav>
                </S.MiddleColumn>
            </S.MiddleColumnWrapper>
            <S.Column id="rightColumn" max={fontSize}>
                {content.rightColumn}
            </S.Column>
        </S.Wrapper>
    );
});

export default Main;
