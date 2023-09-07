import * as S from "./StyledBottom";
import useBottomLogic from "../../hooks/useBottomLogic.tsx";
import {smallStars} from "../../helpers/exports.ts";


function Bottom() {

    const {
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
    } = useBottomLogic();


    return (
        <S.Wrapper>
            <S.Container>
                <S.Title max={bottomMax}
                         onReady={handleTitleReady}
                         content={'TRANSMIT YOUR STAR'}/>
                <S.RowContainer>
                    {tokens.map((token: string) => (
                        <S.Title
                            key={token}
                            selectable={true.toString()}
                            onClick={() => setCurrentToken(token)}
                            selected={currentToken === token}
                            max={fontSize}
                            content={token}
                        />))}
                </S.RowContainer>
            </S.Container>

            <S.Container>
                <S.StarContainer>
                    <S.NavContainer>
                        {current !== 1 && <S.Arrow onClick={() => handleArrowClick("<")} direction="<"/>}
                    </S.NavContainer>
                    <S.Star key={current} src={new URL(`../../assets/stars/${current}.svg`, import.meta.url).href}/>
                    <S.NavContainer>
                        {current !== smallStars.length &&
                            <S.Arrow onClick={() => handleArrowClick(">")} direction=">"/>}
                    </S.NavContainer>
                </S.StarContainer>
                <S.Title max={fontSize}
                         content={`#${current === 18 ? '1999' : String(current + 1981)}`}/>
            </S.Container>

            <S.RowContainer>
                {Object.keys(stats).map((key) => {
                    const content = `${key.toUpperCase()} ${stats[key as keyof typeof stats]}`;
                    return (
                        <S.Title
                            selectable={(key === 'view').toString()}
                            max={fontSize}
                            key={key}
                            content={content}
                            onClick={key === 'view' ? handlePopUpOpen : undefined}
                        />
                    );
                })}
            </S.RowContainer>
            {showPopUp && (
                <S.PopUp onClick={handlePopUpClose}>
                    <S.PopUpContent>
                        <S.PopUpCloseButton onClick={handlePopUpClose}>{'x'}</S.PopUpCloseButton>
                        <S.Star scaled={true} src={new URL(`../../assets/stars/${current}.svg`, import.meta.url).href}/>
                    </S.PopUpContent>
                </S.PopUp>
            )}
        </S.Wrapper>
    );
}

export default Bottom;
