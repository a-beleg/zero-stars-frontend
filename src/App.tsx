import {lazy, Suspense, useRef} from 'react';
import {FC} from 'react';
import {observer} from 'mobx-react-lite';

const Main = lazy(() => import('./pages/main/Main'));
const Top = lazy(() => import('./pages/top/Top'));
const Bottom = lazy(() => import('./pages/bottom/Bottom'));

const App: FC = observer(() => {

    const topRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    return (
        <Suspense fallback={<section>Loading...</section>}>
            <section ref={topRef}>
                <Top/>
            </section>
            <section>
                <Main topRef={topRef} bottomRef={bottomRef}/>
            </section>
            <section ref={bottomRef}>
                <Bottom/>
            </section>
        </Suspense>
    );
});

export default App;
