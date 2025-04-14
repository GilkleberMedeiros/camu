import { Header, Main, Footer } from "../components/main";
import { AdviceUnfinishedAppCard } from "../components/cards";


export function Home() 
{
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            <AdviceUnfinishedAppCard />
        </>
    );
}

export default Home;