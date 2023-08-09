import App from './App';
import React, {StrictMode} from 'react';
import {createRoot} from "react-dom/client";
import {RootContainer, GlobalStyle} from "./styles/root/StyledRoot";

const RootComponent = () => {
    return (
        <StrictMode>
            <GlobalStyle/>
            <RootContainer>
                <App/>
            </RootContainer>
        </StrictMode>
    );
};
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootComponent/>);