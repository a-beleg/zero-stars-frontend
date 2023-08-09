import React, {FC, MutableRefObject, useRef} from "react";
import * as S from "./StyledMain";
import MainStar from "../../components/MainStar/MainStar";
import {mainMiddleColumn} from "../../stores/static";
import useMainLogic from "../../hooks/useMainLogic";
import useInput from "../../hooks/useInput";

type MainProps = {
    topRef: MutableRefObject<HTMLDivElement | null>;
    bottomRef: MutableRefObject<HTMLDivElement | null>;
};

const Main: FC<MainProps> = ({topRef, bottomRef}) => {

    const mainRef = useRef<HTMLDivElement | null>(null);
    const {
        content,
        fontSize,
        columnHeight,
        handleFontSizeReady,
        navigateToRef,
        fontReady
    } = useMainLogic(mainRef);
    const {inputValue, setFocused, handleInputChange, inputRef} = useInput();

    return (
        <S.Wrapper key={fontReady} ref={mainRef}>
            <S.Column id="leftColumn" onReady={handleFontSizeReady}>
                {content.leftColumn}
            </S.Column>
            <S.MiddleColumnWrapper>
                <S.MiddleColumn maxHeight={columnHeight} fontSize={fontSize}>
                    <S.Nav onClick={() => navigateToRef(topRef)}>{mainMiddleColumn.top}</S.Nav>
                    <MainStar/>
                    <S.InputWrapper>
                        <S.Input
                            wider={inputValue.length === 2}
                            onClick={() => setFocused(true)}
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleInputChange}
                            fontSize={3 * fontSize}
                        />
                        <div id={'mint'} style={{fontSize: 3 * fontSize}}>/10</div>
                    </S.InputWrapper>
                    <S.Nav onClick={() => navigateToRef(bottomRef)}>{mainMiddleColumn.bottom}</S.Nav>
                </S.MiddleColumn>
            </S.MiddleColumnWrapper>
            <S.Column id="rightColumn" max={fontSize}>
                {content.rightColumn}
            </S.Column>
        </S.Wrapper>
    );
};

export default Main;
