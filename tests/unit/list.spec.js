import { shallowMount } from "@vue/test-utils";
import ListVue from "@/components/List.vue";

describe("Home.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ListVue, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
