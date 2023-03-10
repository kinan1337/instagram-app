


import React from 'react'
import { Components } from '../../../components'
import { useForm } from 'react-hook-form';
import cls from "../../../assets/styles/register/Register.module.scss"
import Logo from "../../../assets/images/logo/INSTAPNG.png"
import { Link } from 'react-router-dom';
import { FormsValidate } from '../../../helpers/forms';
import { CREATE_USER } from '../../../api/Api';
import { REQUEST } from '../../../api';
import { Hooks } from '../../../hooks';
import { authPath } from '../../../services/Path';

export default function Register() {
    const { goToLogin } = Hooks.useLocations();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid},
        setError
    } = useForm({
        mode:'onSubmit'
    });

    const onSubmit  = (data) => {


        const newData = {
            ...data,
            avatar: null
        }

        if(data) {
            const request = REQUEST.CREATE_USER(newData);

            request
                .then(res => {
                    goToLogin()
                })
        }

        
    };

  return (
    <Components.Container>
        <section className={cls.register_page}> 
            <div className={cls.register_page_card} data-aos="zoom-in-right">
                <Components.Image src={Logo}/>

                <h3>
                    Зарегистрируйтесь, чтобы видеть фото и видео ваших друзей!
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="text"
                            err={errors}
                            placeholder="Username"
                            {...register("username", FormsValidate())} 
                            />
                            <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
                             
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="text"
                            err={errors}
                            placeholder="First Name"
                            {...register("first_name", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.first_name ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="text"
                            err={errors}
                            placeholder="Last Name"
                            {...register("last_name", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.last_name ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="text"
                            err={errors}
                            placeholder="Bio"
                            {...register("bio", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.bio ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="text"
                            err={errors}
                            placeholder="Email"
                            {...register("email", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.email ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="password"
                            err={errors}
                            placeholder="Password"
                            {...register("password", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                            type="password"
                            err={errors}
                            placeholder="Password Repeat"
                            {...register("password_repeat", FormsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"}/>
                        </Components.Forms.Divider>

                        <p className={cls.useable_service}> 
                            Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628'> Подробнее</a>

                        </p>

                    <Components.Forms.Divider>
                        <Components.Forms.AuthSubmit location={"Регистрация"}/>
                    </Components.Forms.Divider>
                </form>

                
            </div>

            <Components.Forms.AuthNavigate location="register"/>
        </section>
    </Components.Container>
  )
}