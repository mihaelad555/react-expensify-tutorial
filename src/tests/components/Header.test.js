import React from 'react'
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRender from 'react-test-renderer/shallow'
import Header from '../../components/Header';
//react-test-render

test('should render Header', () => {
    const wrapper =shallow(<Header/>);
   // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
   // expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRender();
    // renderer.render(<Header/>);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    
})

