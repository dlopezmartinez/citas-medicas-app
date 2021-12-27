import  authStore   from "@/store/auth.module.js";

describe("auth.module", () => {
    it("mutations", () => {
        const state = {
            token: '',
            username: '',
            isAuthenticated: false
        };

        const user = {
            token: 'testToken',
            name: 'testUser',
        }

        const mutations = authStore.mutations

        mutations.setUser(state, user)
        expect(state.token).toBe('testToken');
        expect(state.username).toBe('testUser');
        expect(state.isAuthenticated).toBe(true);

        mutations.purgeUser(state)
        expect(state.token).toBe('');
        expect(state.username).toBe('');
        expect(state.isAuthenticated).toBe(false);

    })

    it("action login succesfull", async () => {
        const state = {
            token: '',
            username: '',
            isAuthenticated: false
        };

        const mutations = authStore.mutations
        const actions = authStore.actions

        const dispatch = jest.fn(() => {
                return Promise.resolve({
                     token: "testToken", username: "testUser"
                })
            })

        
        const commit = jest.fn((context, response) => {
            let user = {
                token: response.token,
                name : response.name
            }
            mutations.setUser(state, user);
        })
        


        await actions.login({ commit, dispatch }, { username: "testUser", password: "testPassword" });
        expect(commit).toHaveBeenCalled();
        expect(state.token).toBe("testToken")
        expect(state.username).toBe("testUser")
        expect(state.isAuthenticated).toBe(true);
        console.log(state);
    })

    it("action login error", async () => {

        const actions = authStore.actions;

        const dispatch = jest.fn(() => {
            return Promise.reject(new Error('Credenciales incorrectas'))
        });
        
        const commit = jest.fn();
        
        await actions.login({ commit, dispatch }, { username: "testUserError", password: "testPasswordError" }).catch((error) => {
            expect(error).toBe('Credenciales incorrectas');
        })
    })

    it("action logout", () => {
        const state = {
            token: 'token',
            username: 'user',
            isAuthenticated: true
        };

        const mutations = authStore.mutations;
        const actions = authStore.actions;

        const commit = jest.fn(() => {
            mutations.purgeUser(state);
        })

        actions.logOut({ commit });

        expect(state.token).toBe('');
        expect(state.username).toBe('');
        expect(state.isAuthenticated).toBe(false);

    })

    it("getters", () => {

        const state = {
            token: 'token',
            username: 'user',
            isAuthenticated: true
        };

        const getters = authStore.getters;

        expect(getters.isAuthenticated(state)).toBe(true);
        expect(getters.currentUser(state)).toBe('user');
        expect(getters.getToken(state)).toBe('token');

    })

});