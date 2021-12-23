import { mount } from "@vue/test-utils";
import LoginVue from "@/views/login/Login.vue";
import product from "@/store/products.module";
import createStore from "vuex";

describe("LoginVue.vue", () => {
    it("has data", () => {
        expect(typeof LoginVue.data).toBe("function");
    });
    it("mock dispatch login", async() => {
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
        expect($store.dispatch).toHaveBeenCalledWith("login", {
            password: "",
            username: "",
        });
    });
});