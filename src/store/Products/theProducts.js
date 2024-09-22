export default {
    state: {
        name:"omar",
        age: 12,
        product: "",
        country: "syria",
        town : "Palmyra",
        club : "barcelona",
        counter: 0
    },


    getters: {
        nameAndage(state){
            return state.name + " " + state.age
        },
        firstProduct(state){
            return state.product[0]
        },
        yourCountry(state){
            return state.country + " " + state.town
        },

        multiple(state){
            return state.counter * 2
        }

    },


    mutations: {
        changeName(state){
            state.name = "mark"
        },

        yourProducts(state,products){
            state.product = products
            console.log(products);
        },

        changeHome(state, newClub){
            state.country = "Turkey"
            state.town = "Ankara"
            state.club = newClub
        },

        inc(state){
            state.counter++
        },
        dec(state){
            state.counter--
        }
    },


    actions: {
        async getProduct(context){
            await fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => context.commit("yourProducts", data.products))
        },

        changeClub(con){
            con.commit("changeHome", "UNITED")
        },

        increase(con){
            con.commit("inc")
        },
        decrease(con){
            con.commit("dec")
        }
    },


    modules: {}
}