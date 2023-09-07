import {createContext, FC, useRef} from 'react'
import {observer} from "mobx-react-lite";
import {useInitStore} from './hooks/useInitStore';
import {createStore} from './stores/UserStore';
import Top from "./pages/top/Top.tsx";
import Main from "./pages/main/Main.tsx";
import Bottom from "./pages/bottom/Bottom.tsx";

export const StoreContext = createContext(createStore());

const App: FC = observer(() => {

    const topRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const {store} = useInitStore();

    return (
        <StoreContext.Provider value={store}>
            <section ref={topRef}><Top/></section>
            <section><Main topRef={topRef} bottomRef={bottomRef}/></section>
            <section ref={bottomRef}><Bottom/></section>
        </StoreContext.Provider>
    )
});

export default App
