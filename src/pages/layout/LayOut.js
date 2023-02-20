

import React from 'react'
import { Components } from '../../components'
import { Route, Routes as Switch} from "react-router-dom"
import { LayoutPages } from '../Lazy'
import { LayOut } from '../../services/Path'
import { Providers } from '../../providers'
import { Hooks } from '../../hooks'

export default function LayOuts() {

    const { token } = Providers.UseAuth();
    const { goToLogin } = Hooks.useLocations();

    React.useEffect(() => {
        if(!token) {
            goToLogin();
        }
    }, [token])

  return (
    <React.Fragment>
        <section className={"layout_row"}>
            <div className='layout_sidebar'>
                <Components.SideBar />
            </div>
            <div className='layout_routes'>
                <Switch>
                    <Route path={LayOut.home} element={<LayoutPages.Home />}/>
                </Switch>
            </div>
        </section>
    </React.Fragment>
  )
}

