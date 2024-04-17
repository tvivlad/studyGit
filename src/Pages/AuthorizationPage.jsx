// @ts-nocheck
import React from 'react'

const AuthorizationPage = () => {
  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          alignItems: 'center',
        }}
      >
        <input
          style={{ margin: '10px' }}
          type='text'
          placeholder='Ваш логин...'
        />
        <input
          style={{ margin: '10px' }}
          type='password'
          placeholder='Ваш пароль'
        />
        <button>войти</button>
      </form>

      <h2>This file also changed in the main branch</h2>
    </div>
  )
}

export default AuthorizationPage
