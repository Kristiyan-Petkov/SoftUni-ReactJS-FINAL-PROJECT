import { useState, useRef, useEffect } from 'react';

const Register = () => {
    const infoRef = useRef();
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        if (values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age}`;
        }
    }, [values.username, values.age]);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // let values = Object.fromEntries(new FormData(e.target))
        // console.log(values);

        console.log(values);
    };
    return (
        <section id="login-page" className="auth-register">
            <form onSubmit={submitHandler} className="auth">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="userName"
                        onChange={changeHandler}
                        //issue with controlled value - adapt
                        value={values.username}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password"/>
                </div>
                <div>
                    <label htmlFor="repeat-password">Repeat Password:</label>
                    <input id="repeat-password" type="password" name="repeat-password" placeholder="Repeat password"/>
                </div>
                <div>
                    <label htmlFor="public-username">Public profile name (visible by other users when you publish):</label>
                    <input
                        id="public-username"
                        type="text"
                        name="publicUsername"
                        onChange={changeHandler}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="user-type">User type:</label>
                    <select name="userType" id="user-type" onChange={changeHandler}>
                        <option value="Freelance">Freelance</option>
                        <option value="Company">Company</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="imageUrl">Profile image:</label>
                    <input
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        onChange={changeHandler}
                        placeholder="https://..."
                    />
                </div>

                <div>
                    <input type="submit" value="Register" className="btn-submit-auth"/>
                    {/* <button type="submit">Login</button> */}
                </div>
            </form>
        </section>
    );
};

export default Register;