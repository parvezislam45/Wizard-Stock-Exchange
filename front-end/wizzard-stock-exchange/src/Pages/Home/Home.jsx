
import Chart from "../../Chart/Chart";
import Banner from "./Banner";
import Member from "./Member";
import Ratio from "./Ratio";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Ratio/>
           <Chart/>
           <Member/>
        </div>
    );
};

export default Home;