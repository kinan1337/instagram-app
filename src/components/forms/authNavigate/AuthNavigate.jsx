

import React from 'react'
import { Link } from 'react-router-dom'
import { authPath } from '../../../services/Path'

import cls from "../../../assets/styles/forms/Forms.module.scss"

export default function AuthNavigate({location}) {
  return (
    <div className={cls.auth_page_bottomCard}  >
                <p>
                    {
                        location === "login"
                        ? "У вас еще нет аккаунта?"
                        : "Есть аккаунт?"
                    } 
                    <Link to={
                        location === "login"
                        ? authPath.register
                        : authPath.login
                    }>
                        
                        {
                            location === "login"
                            ? "Зарегистрироваться"
                            : "Вход"
                        }
                    </Link>
                </p>
            </div>
  )
}
