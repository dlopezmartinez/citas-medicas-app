import { mount } from "@vue/test-utils";
import HomeVue from "@/views/home/Home.vue";

describe("Home.vue", () => {
    it("has data", () => {
        expect(typeof HomeVue.data).toBe("function");
    });
    it("mock dispatch products", async() => {
        const $store = {
            dispatch: jest.fn((payload) => {
                return Promise.resolve({
                    id: 1,
                    name: "cuenta",
                    balance: 33,
                });
            }),
        };
        const wrapper = mount(HomeVue, {
            global: {
                mocks: {
                    $store,
                },
            },
        });
        expect($store.dispatch).toHaveBeenCalledWith("products");
    });
});