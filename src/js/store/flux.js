const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: (a, b, c, d) => {
				console.log("clicked", a);
				console.log("clicked", b);
				console.log("clicked", c);
				console.log("clicked", d);
			}
		}
	};
};

export default getState;
