import * as S from "./StyledTop";
import topStar from "../../assets/stars/12.svg";
import {topText} from "../../stores/static";
import UnformatedText from "../../components/UnformatedText/UnformatedText";
import {smallStars} from "../../helpers/exports.ts";

function Top() {

    return (
        <S.Wrapper>
            <S.ContentWrapper>
                <S.TopStar src={topStar}/>
                <UnformatedText html={topText}/>
            </S.ContentWrapper>
            <S.StarsContainer>
                {smallStars.map((star: string, index: number) => (
                    <S.Star key={index} src={new URL('../' + star, import.meta.url).href}/>
                ))}
            </S.StarsContainer>
        </S.Wrapper>
    );
}

export default Top;
