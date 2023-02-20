

import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Routers } from '../pages'
import { Apps } from '../services/Path'
import "aos/dist/aos.css"
import Aos from 'aos'


export default function Routes() {

    React.useEffect(() => {
      Aos.init({
        duration:1000
      });
    }, []);

  return (
    <React.Fragment>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
            </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}
