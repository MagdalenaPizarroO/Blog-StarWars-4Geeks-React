const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleUID: {},
			peopleINFO: {},
			planetsUID: {},
			planetsINFO: {},
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeopleUIDData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({peopleUID:data})) //función que modifica store: un elemento del objeto y tengo que decirle cuál	
					.catch((error) => console.log(error));

			},
			loadPeopleINFOData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({peopleINFO:data})) 
					.catch((error) => console.log(error));

			},
			loadPlanetsUIDData: () => {
				fetch("https://swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({planetsUID:data})) 
					.catch((error) => console.log(error));

			},
			loadPlanetsINFOData: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({planetsINFO:data}))
					.catch((error) => console.log(error));

			},
			addToFavorites: (character) => {
				const store = getStore();
				const favorites = Array.isArray(store.favorites)? [...store.favorites]:[];
				if (typeof character === "string" && character.trim() !== "" && !favorites.includes(character.trim())) {	//estoy eliminando los espacios vacíos para que no aparezca un elemento vacío en la lista, lo que impide que aparezca el mensaje Add favorites
					favorites.push(character.trim());
					setStore({favorites})
				} 
			},
			removeFavories: (index) => {
				const store = getStore();
				const filtered = store.favorites.filter((fav, currentIndex) => index !== currentIndex)
				setStore({favorites:filtered})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
