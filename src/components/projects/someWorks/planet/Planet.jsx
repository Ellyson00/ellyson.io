/**
 * Created by Ellyson on 5/11/2018.
 */

import * as THREE from 'three';
import TemplateFor3D from '../../../templates/mainTemplate3D';
import vertexShader from "./shaders/vertexShader.vert";
import fragmentShader from "./shaders/fragmentShader.frag";

const xpos = require(`../../../../assets/img/skyBox/planet/nebula-xpos.png`);
const xneg = require(`../../../../assets/img/skyBox/planet/nebula-xneg.png`);
const ypos = require(`../../../../assets/img/skyBox/planet/nebula-ypos.png`);
const yneg = require(`../../../../assets/img/skyBox/planet/nebula-yneg.png`);
const zpos = require(`../../../../assets/img/skyBox/planet/nebula-zpos.png`);
const zneg = require(`../../../../assets/img/skyBox/planet/nebula-zneg.png`);
const planet = require(`../../../../assets/img/map/planet.png`);

export default class Planet extends TemplateFor3D {
	initScene() {
		super.initScene();
		this.scene.background = new THREE.Color(0x000000);
	}

	initLight() {
		const light = new THREE.AmbientLight(0x404040, 2); // soft white light
		this.scene.add(light);
	}

	initControls() {
		super.initControls();
		this.camera.position.z = 320;
	}

	initPlanet() {
		const texture = new THREE.TextureLoader().load(planet);
		const sphereGeo = new THREE.SphereGeometry(100, 32, 16);
		const sphereMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: texture});
		this.planet = new THREE.Mesh(sphereGeo, sphereMaterial);
		this.scene.add(this.planet);
		const customMaterial = new THREE.ShaderMaterial({
			uniforms: {},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			side: THREE.BackSide,
			blending: THREE.AdditiveBlending,
			transparent: true
		});

		const ballGeometry = new THREE.SphereGeometry(120, 32, 16);
		const ball = new THREE.Mesh(ballGeometry, customMaterial);
		this.scene.add(ball);
	}

	initSkyBox() {
		const skyGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
		const imageURLs = [];

		imageURLs.push(xpos);
		imageURLs.push(xneg);
		imageURLs.push(ypos);
		imageURLs.push(yneg);
		imageURLs.push(zpos);
		imageURLs.push(zneg);

		const textureCube = new THREE.CubeTextureLoader().load(imageURLs);
		textureCube.mapping = THREE.CubeRefractionMapping;
		this.scene.background = textureCube;
	}

	componentDidMount() {
		this.init3D();
		this.initLight();
		this.initPlanet();
		this.initSkyBox();
		this.initControls();
		this.animate();
	}

	animate() {
		if (!this.looped) return;
		super.animate();
		this.planet.rotation.y += 0.001
	}
}
