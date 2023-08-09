import * as S from "./StyledTop";
import smallStars from "../../assets/stars";
import topStar from "../../assets/stars/12.svg";
import {topText} from "../../stores/static";
import UnformatedText from "../../components/UnformatedText/UnformatedText";

function Top() {
    return (
        <S.Wrapper>
            <S.ContentWrapper>
                <S.TopStar src={topStar}/>
                <UnformatedText html={topText}/>
            </S.ContentWrapper>
            <S.StarsContainer>
                {smallStars.map((star: string, index: number) => (
                    <S.Star key={index} src={require(`../../assets/stars/${star}`)}/>
                ))}
            </S.StarsContainer>
        </S.Wrapper>
    );
}

export default Top;
