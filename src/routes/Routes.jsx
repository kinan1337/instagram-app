

import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Routers } from '../pages'
import { Apps } from '../services/Path'
import "aos/dist/aos.css"
import Aos from 'aos'
import { Components } from '../components'


export default function Routes() {

    React.useEffect(() => {
      Aos.init({
        duration:1000
      });
    }, []);

  return (
    <React.Fragment>
        <React.Suspense fallback={<Components.Loader />}>
            <Switch>
                <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
                <Route path={Apps.layout} element={<Routers.LayOutRoutes />}/>
            </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}
