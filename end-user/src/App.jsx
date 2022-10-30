import React from 'react'
import './App.css'
import SignInForm from './components/SignInForm/SignInForm'
import NewPassword from './components/NewPassword/NewPassword'
import NewPasswordNotice from './components/NewPasswordNotice/NewPasswordNotice'

function App() {
	return (
		<div>
			<div>
				<NewPassword />
			</div>
		</div>
	)
}

export default App
