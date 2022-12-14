/**
 * Created by Ellyson on 5/11/2018.
 */

import TemplateFor3D from '../../../templates/mainTemplate3D';
import * as THREE from 'three';
import fragmentShader from './shader.frag';
import vertexShader from './shader.vert';

export default class Shader4 extends TemplateFor3D {
	initControls() {
		super.initControls();
		this.camera.position.set(0, 0, 10);
	}

	initShader() {
		const geometry = new THREE.SphereBufferGeometry(4, 30, 30);
		let array = [];

		for (let v = 0; v < geometry.attributes.position.array.length / 3; v++) {
			array.push(Math.random() * 3);
		}
		geometry.setAttribute("displacement", new THREE.Float32BufferAttribute(array, 1));
		const customMaterial = new THREE.ShaderMaterial({
			uniforms: {
				amplitude: {
					type: 'f', // a float
					value: 0
				}
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
		});

		this.sphere = new THREE.Mesh(geometry, customMaterial);
		this.scene.add(this.sphere);
	}

	componentDidMount() {
		this.init3D();
		this.initShader();
		this.initControls();
		this.animate();
	}

	animate() {
		if (!this.looped) return;
		super.animate();
		this.sphere.material.uniforms.amplitude.value = Math.sin(this.time / 50);
	}
}
