
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/update';

describe('Working Canvas', () => {
  it('Should Rendere Canvas 1', () => {
    var a = App.getInitialProps({query:{a:3,b:4,c:5}});
    const app = shallow(<App {...a} />)
    expect(app.find('canvas')).toHaveLength(1);
  })
  // error First  
  it('A is Invalid ', () => {
    var a = App.getInitialProps({query:{a:'',b:4,c:5}});
    const app = shallow(<App {...a} />)
    expect(app.find('h1').text()).toBe("value 'A' is Invalid");
  })
  
  it('B is Invalid ', () => {
    var a = App.getInitialProps({query:{a:2,b:'',c:5}});
    const app = shallow(<App {...a} />)
    expect(app.find('h1').text()).toBe("value 'B' is Invalid");
  })
  
  it('C is Invalid ', () => {
    var a = App.getInitialProps({query:{a:3,b:4,c:''}});
    const app = shallow(<App {...a} />)
    expect(app.find('h1').text()).toBe("value 'C' is Invalid");
  })


  it('C is Invalid ', () => {
    var a = App.getInitialProps({query:{a:3,b:4,c:''}});
    const app = shallow(<App {...a} />)
    expect(app.find('h1').text()).toBe("value 'C' is Invalid");
  })

  it('Algo Satisfaction failed', () => {
    var a = App.getInitialProps({query:{a:3,b:4,c:8}});
    const app = shallow(<App {...a} />)
    expect(app.find('h1').text()).toBe("Values Don't pass Pythagoras Theorem");
  })

})