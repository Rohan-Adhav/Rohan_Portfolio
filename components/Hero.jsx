import { ReactTyped } from "react-typed"
export default function Hero(props) {
    return (
        <>
            <section className="img-text-animation-container" id="home">
                <section className="hero-text">
                    <h1>
                        Hi There 👋 , <br /> I am Rohan Adhav{" "}
                    </h1>
                    <h2>
                        <ReactTyped
                            strings={['A Full-Stack Developer',
                                'Building AI-powered Apps',
                                'Working On Blockchain Platforms',
                                'Creating Interactive Web Apps']}
                            typeSpeed={80}
                            backSpeed={40}
                            loop
                        />
                    </h2>

                </section>
                <img src={props.src} alt="poster-image" draggable="false" onContextMenu={(e)=>e.preventDefault()} className="poster-image" />
            </section>
        </>
    )
}