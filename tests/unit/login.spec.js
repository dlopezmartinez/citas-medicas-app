import { mount } from "@vue/test-utils";
import LoginVue from "@/views/login/Login.vue";

describe("LoginVue.vue", () => {
    it("has data", () => {
        expect(typeof LoginVue.data).toBe("function");
    });
    it("mock dispatch login", async () => {
        const $store = {
            dispatch: jest.fn(() => {
                return Promise.resolve({
                    response: { token: "token_test", username: "username_test" },
                });
            }),
        };
        const $router = {
            push: jest.fn(),
        };
        const wrapper = mount(LoginVue, {
            global: {
                mocks: {
                    $store,
                    $router,
                },
            },
        });
        wrapper.find("#btnLogin").trigger("submit");
        await wrapper.vm.$nextTick();
        expect($store.dispatch)
            .toHaveBeenCalledWith("login", {
                password: "",
                username: "",
            });
    });
    it("mock dispacth error login", async () => {
        const $store = {
            dispatch: jest.fn(() => {
                return Promise.reject({});
            })
        }
        const wrapper = mount(LoginVue, {
            global: {
                mocks: {
                    $store,
                },
            },
        });
        wrapper.find("#btnLogin").trigger("submit").catch(() => {
            expect(wrapper.vm.error).toEqual("Credenciales incorrectas");
        });
    });
});