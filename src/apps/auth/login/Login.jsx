
import React from 'react'
import { Components } from '../../../components'
import { useForm } from 'react-hook-form';
import { FormsValidate } from '../../../helpers/forms';
import cls from "../../../assets/styles/login/Login.module.scss"
import Logo from "../../../assets/images/logo/INSTAPNG.png"
import { REQUEST } from '../../../api';

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm();

    const onSubmit = (data) => {
        if(data) {
          const request = REQUEST.LOGIN_USER(data);

          request
            .then(res => {
              const data = res.data;

              localStorage.setItem("access", data.access);
              localStorage.setItem("refresh", data.refresh)
            })
        }
    };

  return (
    <Components.Container>
        
        <section className={cls.login_page}>
            <div className={cls.login_page_card} data-aos="zoom-in-right">
              <Components.Image src={Logo}/>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Components.Forms.Divider>
                    <Components.Forms.TextInput
                    type="text"
                    placeholder="Username"
                    {...register("username", FormsValidate())}
                    />
                    <Components.Forms.Errors err={errors?.username ? "err" : "success"}/>
                </Components.Forms.Divider>

                <Components.Forms.Divider>
                  <Components.Forms.TextInput
                  type="password"
                  placeholder="Password"
                  {...register("password", FormsValidate())}
                  />
                  <Components.Forms.Errors err={errors?.password ? "err" : "success"}/>
                </Components.Forms.Divider>

                <Components.Forms.Divider>
                    <Components.Forms.AuthSubmit location={"Войти"}/>
                </Components.Forms.Divider>
              </form>
            </div>
            <Components.Forms.AuthNavigate location="login"/>
        </section>
    </Components.Container>
  )
}
