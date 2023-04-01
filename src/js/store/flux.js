const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleUID: {},
			peopleINFO: {},
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
					.then(data => setStore({peopleINFO:data})) //función que modifica store: un elemento del objeto y tengo que decirle cuál	
					.catch((error) => console.log(error));

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
