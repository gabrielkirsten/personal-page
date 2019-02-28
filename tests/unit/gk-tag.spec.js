import { mount } from '@vue/test-utils';
import GkTag from '@/components/gk-tag.vue';

describe('GkTag', () => {
  test('Should create the componen', () => {
    const wrapper = mount(GkTag);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Should put text in tag', () => {
    const text = 'some text';
    const wrapper = mount(GkTag, {
      propsData: {
        text,
      },
    });
    expect(wrapper.props().text).toEqual(text);
  });

  test('Should set a custom color', () => {
    const color = 'rgb(0, 0, 0)';
    const wrapper = mount(GkTag, {
      propsData: {
        backgroundColor: color,
      },
    });
    expect(wrapper.attributes().style).toContain(`background-color: ${color};`);
  });

  test('Should set a default color', () => {
    const defaultColor = 'rgb(51, 51, 51)';
    const wrapper = mount(GkTag);
    expect(wrapper.attributes().style).toContain(`background-color: ${defaultColor};`);
  });
});
