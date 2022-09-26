import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointLightHelper } from 'three';
import moonn from '../../Images/moonn.jpg';
import venus from '../../Images/venus.jpg';
import space from '../../Images/space.jpg';
import { Typography } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
const Home = () => {

    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonn);
        const venusTexture = textureLoader.load(venus);
        const spaceTexture = textureLoader.load(space)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });


        const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);


        const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
        const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture })
        const vens = new THREE.Mesh(venusGeometry, venusMaterial);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);
        const lightHelper = new PointLightHelper(pointLight);


        scene.add(moon);
        scene.add(vens)
        scene.add(pointLight);
        scene.add(pointLight2)
        scene.background = spaceTexture

        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                vens.rotation.x -= constSpeed;
                vens.rotation.y += constSpeed;
            }
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                vens.rotation.x -= constSpeed;
                vens.rotation.y -= constSpeed;
            }
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                vens.rotation.x -= constSpeed;
                vens.rotation.y += constSpeed;
            }
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                vens.rotation.x -= constSpeed;
                vens.rotation.y += constSpeed;
            }
        })

        vens.position.set(8, 5, 5)
        camera.position.set(4, 4, 8)

        camera.position.z = 5;
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            vens.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera)
        };

        animate();
    }, [])
    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>
            <div className='homeContainer'>
                <Typography variant="h3">TIMELINE</Typography>
                <TimeLine timelines={[1, 2, 3, 4]} />
            </div>
            <div className='homeSkills'>
                <Typography variant='h3'>SKILLS</Typography>
                <div className='homeCubeSkills'>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces1'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY2YhMsJluE4eJFwPBIZu9k12vyBc7mRrnw&usqp=CAU" alt="Face1" />
                    </div>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&usqp=CAU" alt="Face2" />
                    </div>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces3'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUlm3bL8_IdOLDxjOgYcuLV7twxs1pwhQ6w&usqp=CAU" alt="Face3" />
                    </div>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU" alt="Face4" />
                    </div>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces5'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKofXulvFlHSNc6L-9HHnlZajVGeRra1A-A&usqp=CAU" alt="Face5" />
                    </div>
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces6'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1s_Ar69UwzDS97LGGQPeunayardU8Ivpow&usqp=CAU" alt="Face6" />
                    </div>
                </div>
                <div className='cubeShadow'></div>
                <div className='homeskillsBox'>
                    <SiCplusplus />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />
                    <SiThreedotjs />
                </div>
            </div>
            <div className='homeYoutube'>
                <Typography variant='h3'>Toutube</Typography>
                <div className='homeYoutubeWrapper'>
                    <YoutubeCard 
                    image="https://docs.appspace.com/wp-content/uploads/2020/03/YouTube.png"
                    title="Sample Vedio"/>
                    <YoutubeCard 
                    image="https://docs.appspace.com/wp-content/uploads/2020/03/YouTube.png"
                    title="Sample Vedio"/>
                    <YoutubeCard 
                    image="https://docs.appspace.com/wp-content/uploads/2020/03/YouTube.png"
                    title="Sample Vedio"/>
                    <YoutubeCard 
                    image="https://docs.appspace.com/wp-content/uploads/2020/03/YouTube.png"
                    title="Sample Vedio"/>
                </div>
            </div>
        </div>
    )
}

export default Home