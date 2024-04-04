import React from 'react'
import "bulma/css/bulma.min.css";
const Login = () => {
  return (
   <section className='hero has-background-grey  is-fullheight is-fullwidth'>
  <div class="hero-body">
   <div class="container">
    <div class="column is-centered">
        <div class="column is-4">
            <form className='box'>
            <h3 className='title has-text-primary'>Login</h3>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-success is-fullwidth">
                    Login
                    </button>
                </p>
                </div>
            </form>
        </div>
    </div>
   </div>
  </div>
   </section>
  )
}

export default Login
