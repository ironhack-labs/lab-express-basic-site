const express = require('express');
const hbs = require('hbs');

const server = express();

// ACCESSING PAGES

server.set('view engine', 'hbs');

// ACCESSING fichiers dossier public
const path = require('path');
server.use(express.static(path.join(__dirname, 'public')));

// HOME
server.get('/', function(req, res) {
	res.render('index', {
		name: 'Vladimir'
	});
});

// ABOUT
server.get('/about', function(req, res) {
	res.render('about', {
		summary:
			'Du graffiti à la peinture, Jean-Michel Basquiat (1960–1988) est l’une des comètes de l’art contemporain. Mort d’une overdose à l’âge de 27 ans, ce jeune ami de Warhol a élevé le street art au rang des beaux-arts. Son œuvre témoigne des réminiscences de son passé familial (ses origines haïtiennes), conjuguées aux influences du pop art. Il est devenu l’une des grandes figures de l’afro-américanisme dans le monde artistique.',

		quote: '« Je ne suis pas un artiste noir. Je suis un artiste. »',
		life: [
			{
				p:
					'Né à Brooklyn dans une famille aux origines mixtes (portoricaine par sa mère et haïtienne par son père), Jean-Michel Basquiat est un enfant très précoce dans le domaine des langues et du dessin.'
			},
			{
				p:
					'Après la séparation de ses parents et un déménagement, il revient à New York à l’âge de 16 ans. Il découvre le milieu de l’underground, se lie avec des graffeurs et abandonne ses études. Il prend alors le pseudonyme de SAMO© (pour « Same Old Shit ») pour taguer dans les rues de Manhattan.'
			},
			{
				p:
					'Pour combler l’absence des artistes noirs dans les musées américains, l’ambition de Basquiat se double très vite d’une quête identitaire placée sous le signe de la négritude. Son goût pour le métissage culturel et sa haine du racisme nourrissent une œuvre néo-expressionniste parfois sombre et angoissée.'
			},
			{
				p:
					'À la fin des années 1970, alors que Keith Haring couvre aussi les murs de graffitis, Basquiat devient une figure de l’East Village. Il travaille seul ou en collectif, fonde un groupe de rock et participe à un film indépendant. C’est à cette occasion qu’il rencontre Andy Warhol, pape consacré de la Pop culture. Basquiat commence à exposer ses œuvres et la fréquentation de Warhol lui offre une plus grande visibilité.'
			},
			{
				p:
					'En 1982, il expose chez Larry Gagosian,  l’un des plus importants marchands d’art contemporain. Les plus grands musées américains se l’arrachent. Mais, au quotidien, l’artiste est miné par la drogue et l’alcool. Il vit cloîtré dans un loft où il peint et regarde la télévision en boucle.'
			},
			{
				p:
					'La disparition de Warhol en 1987 est une tragédie pour Basquiat. Le peintre s’isole et s’enferme dans sa toxicomanie. Un voyage à Hawaï ne suffira pas à le détourner de ses démons : le jeune artiste sera finalement retrouvé mort dans son appartement de New York, le 12 août 1988.'
			},
			{
				p:
					'En 2017, une de ses œuvres pulvérise un record de vente. Elle atteint aux enchères 110,5 millions de dollars, signe que l’artiste mort depuis trente ans n’a pas fini de faire vivre le marché de l’art contemporain. Il est devenu l’un des artistes américains les plus chers de l’Histoire.'
			}
		]
	});
});

// WORKS

server.get('/works', function(req, res) {
	res.render('works', {
		oeuvres: [
			{
				date: '1# Dusthead, 1982',
				image: '/images/tableaux/1.jpg'
			},
			{
				date: '2# Untitled Skull, 1981',
				image: '/images/tableaux/2.jpg'
			},
			{
				date: '3# Untitled Skull, 1982',
				image: '/images/tableaux/3.jpg'
			},
			{
				date: '4# Irony of a negro policeman, 1981',
				image: '/images/tableaux/4.jpg'
			},
			{
				date: '5# Untitled (boxer), 1982',
				image: '/images/tableaux/5.jpg'
			},
			{
				date: '6# Hollywood africans, 1983',
				image: '/images/tableaux/6.jpg'
			},
			{
				date: '7# In italian, 1983',
				image: '/images/tableaux/7.jpg'
			},
			{
				date: '8# King Alphonso, 1983',
				image: '/images/tableaux/8.jpg'
			},
			{
				date: '9# Win $ 1’000’000, 1984',
				image: '/images/tableaux/9.jpg'
			},
			{
				date: '10# Riding with death, 1988',
				image: '/images/tableaux/10.jpg'
			}
		]
	});
});

// SERVER PORT

server.listen(3002, () => {
	console.log('Server is now running vlad...');
});
