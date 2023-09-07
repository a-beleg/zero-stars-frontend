import {FC} from "react";
import {TextWrapper} from "./StyledUnformatedText";

type Props = {
    html: string | TrustedHTML;
}

const UnformattedText: FC<Props> = ({html}) => {
    return (
        <TextWrapper id={'topText'}>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </TextWrapper>
    );
};

export default UnformattedText;
