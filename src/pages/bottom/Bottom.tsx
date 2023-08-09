import * as S from "./StyledBottom";
import smallStars from "../../assets/stars";
import useBottomLogic from "../../hooks/useBottomLogic";
import useMainLogic from "../../hooks/useMainLogic";


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

    const {fontReady} = useMainLogic();
    return (
        <S.Wrapper key={fontReady}>
            <S.Container>
                <S.Title max={bottomMax}
                         onReady={handleTitleReady}
                         content={'TRANSMIT YOUR STAR'}/>
                <S.RowContainer>
                    {tokens.map((token: string) => (
                        <S.Title
                            selectable={true}
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
                    <S.Star key={current} src={require(`../../assets/stars/${current}.svg`)}/>
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
                            selectable={key === 'view'}
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
                        <S.Star scaled={true} src={require(`../../assets/stars/${current}.svg`)}/>
                    </S.PopUpContent>
                </S.PopUp>
            )}
        </S.Wrapper>
    );
}

export default Bottom;
