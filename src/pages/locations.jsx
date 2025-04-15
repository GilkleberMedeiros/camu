import { Header, Locations as Locs, Footer } from "../components/main";


export function Locations()  
{
    return (
        <div className="min-h-[100%] flex flex-col justify-between">
            <div>
                <Header />
                <Locs />
            </div>
            <Footer />
        </div>
    );
}

export default Locations;