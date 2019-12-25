const layers = document.querySelectorAll('.layer')
document.onmousemove = e => {
	layers.forEach(layer => {
		const x = (window.innerWidth - e.clientX * 10) / 100
		const y = (window.innerHeight - e.clientY * 10) / 100
		layer.style.transform = `translate(${x}px, ${y}px)`
	})
}