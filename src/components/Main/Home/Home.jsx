import Slideshow from "../Slider/Slideshow";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";
import Page4 from "./Page/Page4";

export default function Home() {
    return (
        <div>
            <Slideshow />
            <div className="mt-15">
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            </div>
        </div>
    )
}