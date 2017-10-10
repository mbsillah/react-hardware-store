import React, {Component} from 'react'
import Shop from './Shop'
import Header from './Header'

class HomePage extends Component {
    render() {
        return(
             <div>
                 <Header />
                 <hr/>
                <Shop />
            </div>
        )
    }
}

export default HomePage;