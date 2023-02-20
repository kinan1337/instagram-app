

import React from 'react'
import { Route, Routes as Switch} from "react-router-dom"
import { LayOut } from '../../services/Path'
import { LayoutPages } from '../Lazy'

export default function LayOutRoutes() {
  return (
    <React.Fragment>
        <Switch>
            <Route path={LayOut.home} element={<LayoutPages.Home />}/>
        </Switch>
    </React.Fragment>
  )
}
