import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Quiz from "./Quiz"
import PrivateRoute from './PrivateRoute';
import WrongQuestions from './WrongQuestions';




function App() {
return (
	<Container
		className='d-flex align-items-center justify-content-center'
		style={{ minHeight: "100vh" }}>
			<div className='w-100' style={{ maxWidth: "400px" }}>
			<Router>
				<AuthProvider>
					<Routes>
						<Route element={<PrivateRoute />}>
							<Route path="/" element={<Quiz />} />
							<Route path="/results" element={<WrongQuestions />} />
						</Route>
						<Route path="/login" element={<Login />} />
					</Routes>			
				</AuthProvider>
			</Router>
			</div>
		</Container>		
	);
	
}

export default App

