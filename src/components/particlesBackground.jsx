import { useCallback } from "react";
import { useMemo } from "react";
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';

const ParticlesBackground = () => {

    const options = useMemo(() => {
        return {
            fullScreen:{
                enable: true,
                zIndex: 0
            },
            interactivity:{
                events:{
                    onHover:{
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes:{
                    repulse:{
                        distance: 100
                    }
                }
            },
            particles:{
                links:{
                    enable: true,
                },
                move:{
                    enable:true,
                    speed: { min: 1, max: 5},
                },
                opacity:{
                    value: { min: 0.3, max: 0.7}
                },
                size:{
                    value:{ min: 1, max: 3}
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return (        
        <Particles init={particlesInit} options={options}/> 
     );
}
 
export default ParticlesBackground;