

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Components } from '..'

import Logo from "../../assets/images/logo/INSTAPNG.png"
import cls from "../../assets/styles/sidebar/SideBar.module.scss"
import { SidebarList } from '../../utils/List'

export default function SideBar() {

  const bottomList = SidebarList[5];

  return (
    <section className={cls.sidebar_wrapper}>
        <div className={cls.sidebar_wrapper_content}>
            <Components.Image src={Logo}/>

            <section className={cls.sidebar_wrapper_content_list}>
                <ul>
                  {SidebarList.slice(0,5).map(item => (
                    <li key={item.id}>
                        <NavLink to>
                          <item.icon />
                          {item.caption}
                        </NavLink>
                    </li>
                  ))}
                </ul>
                <ul>
                  <Link>
                    <bottomList.icon />
                    {bottomList.caption}
                  </Link>
                </ul>
            </section>
        </div>  
    </section>
  )
};
