import productsStore from "@/store/products.module.js";


describe("products.store", () => {

    it("mutations", () => {

        const state = {
            products: []
        }

        const mutations = productsStore.mutations

        const products = ['test']

        mutations.setProducts(state, products);
        expect(state.products[0]).toBe('test');

        mutations.purgeProducts(state);
        expect(state.products.length).toBe(0);
    })

    it("action products succesfull", async () => {

        const state = {
            products: []
        }

        const mutations = productsStore.mutations
        const actions = productsStore.actions

        const dispatch = jest.fn(() => {
            return Promise.resolve(
                ['test', 'test']
            )
        });

        const commit = jest.fn((context, response) => {
            mutations.setProducts(state, response);
        })

        await actions.products({ commit, dispatch })
        expect(state.products.length).toBeGreaterThan(0);

    })

    it("action products succesfull", async () => {


        const actions = productsStore.actions

        const dispatch = jest.fn(() => {
            return Promise.reject(new Error('Error message'))
        });

        const commit = jest.fn((context, response) => {
            mutations.setProducts(state, response);
        })

        await actions.products({ commit, dispatch }).catch((error) => {
            expect(error).toBe('Error message');
        })

    })

    it("action products succesfull", () => {
        const state = {
            products: ['test', 'test']
        }
        const getters = productsStore.getters;
        expect(getters.getProducts(state).length).toBeGreaterThan(0)
        expect(getters.getProducts(state)[0]).toBe('test');

    })






})