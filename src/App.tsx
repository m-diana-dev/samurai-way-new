import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/state";
import {Section, Container, Theme, MainBlock, Flex} from "./styles/Theme.tsx";


type AppPropsType = {
    state: StateType
}
const App = (props: AppPropsType) => {
    // @ts-ignore
    return (
        <Theme>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Section>
                        <Container>
                            <Flex>
                                <Navbar/>
                                <MainBlock>
                                    <Routes>
                                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                                        <Route path="/profile" element={<Profile posts={props.state.ProfilePage.posts}/>}/>
                                        <Route path="/messages/*" element={<Dialogs dialogs={props.state.DialogsPage.dialogs}
                                                                                    messages={props.state.DialogsPage.messages}/>}/>
                                        <Route path="/news" element={<News/>}/>
                                        <Route path="/music" element={<Music/>}/>
                                    </Routes>
                                </MainBlock>
                            </Flex>
                        </Container>
                    </Section>
                </div>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
