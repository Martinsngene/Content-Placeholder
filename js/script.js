// Bringing in all the Id's needed to start coding the functionalities


const header = document.getElementById('header')

const title = document.getElementById('title')

const excerpt = document.getElementById('excerpt')

const profile_img = document.getElementById('profile_img')

const name = document.getElementById('name')

const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')

const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData(){

	header.innerHTML = '<img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="header image">'

	title.innerHTML = 'Lorem ipsum dolor sit amet'

	excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'

	profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="user photo">'

	name.innerHTML = 'John Doe'
	
	date.innerHTML = 'Oct 08, 2020'


	animated_bgs.forEach(bg =>

		bg.classList.remove('animated-bg')

		)

	animated_bg_texts.forEach(bg =>

		bg.classList.remove('animated-bg-text')

		)
}