import Particles from "react-tsparticles";

const ParticlesBackground = () => {
    return ( 
        <div>
            <Particles 
            options={{
                background: {
                    color: '#222733',
                },
                fps_limit: 60,
                interactivity:{
                    detectsOn:'canvas',
                    events:{
                        resize: true
                    },
                },
                particles:{
                    color: {
                        value: '9fafca'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit:0,
                        value: 400
                    },
                    opacity:{
                        animation:{
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random:{
                            enable: true,
                            minimumValue: 0.05,
                        },
                        shape:{
                            type: "circle",
                        },
                        size:{
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 3,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable_auto: true,
                            distance: 100,
                            color: "#fff",
                            opacity: 1,
                            width: 1,
                            condensed_mode: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 600
                            }
                          },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }
                        }
                    }
                }
            }}/>
        </div>
     );
}
 
export default ParticlesBackground;