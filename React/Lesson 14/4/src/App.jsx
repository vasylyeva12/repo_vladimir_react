import React, { useEffect } from 'react'
import "./App.scss"
import { useForm } from 'react-hook-form';

const App = () => {
    const { register, setError, formState: { errors }, handleSubmit, setValue, clearErrors, getValues } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            form1: {
                username: "",
                surname: ""
            },
            form2: {
                username: "",
                surname: ""
            }
        }
    });

    const onSubmit = data => console.log(data);

    const fetchApi = async () => {
        let resp = await fetch("https://randomuser.me/api");

        let {results} = await resp.json();

        setValue("username", results[0].login.username)
        setValue("password", results[0].login.password)
        setValue("age", results[0].registered.age)
        setValue("email", results[0].email)
    }

   useEffect(()=>{
        fetchApi()

        setError("username", { type: 'custom', message: 'This is Error!' })
   },[]);

   console.log(errors);

    return (
        <div className="container">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item">
                    <label htmlFor="username">Username</label>
                    <input
                        id='username'
                        {
                            ...register("username", { 
                                // required: "Username is required", 
                                maxLength: 20,
                                onChange: (e) => {
                                    if(e.target.value !== "hello") {
                                        setError("username", { type: 'custom', message: 'This is Error!' })
                                    }
                                }
                            })
                        }
                    />
                      {errors.username && <p className="alert alert-error">{errors.username?.message}</p>}
                </div>

                <div className="form__item">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id='age'
                        step='0.001'
                        {
                            ...register("age", { 
                                required: "Age is required",
                                setValueAs: v => Number(v),
                                validate: (value, formValues) => value === 1
                            })
                        }
                    />
                      {errors.username && <p className="alert alert-error">{errors.username?.message}</p>}
                </div>

                <div className="form__item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        {...register("email", { required: "Email Address is required"})}
                    />

                    {errors.email && <p className="alert alert-error">{errors.email?.message}</p>}
                </div>

                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        {...register("password")}
                    />
                </div>

                <button type='submit' className='btn'>ADD USER</button>

                
               
            </form>


            <button
                    type="button"
                    onClick={() => {
                        console.log(getValues())
                    }}
                >
                    Get Values
                </button>
        </div>
    )
}

export default App