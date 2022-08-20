import React, { useRef, useState } from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {useNavigate} from "react-router-dom"

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert> }
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="emial">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder='example@email.com' ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='password' ref={passwordRef} required />
                    </Form.Group>
                    &nbsp; &nbsp;
                    <Button disabled={loading} class="w-100" type="submit">
                        Log In
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}
