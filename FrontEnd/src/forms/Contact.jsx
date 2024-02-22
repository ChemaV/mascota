import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function Contact() {
    const { register, handleSubmit } = useForm();
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setUsername(data.username);
        navigate('/home', { state: { username: data.username } });
    };

    return (
        <>
            <section className='logoandlogin'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='label'>
                            <label htmlFor='username'>
                                <input id='username' {...register('username')} type='text' placeholder='Tu nombre:' />
                            </label>
                        </div>
                        <div className='label'>
                            <label htmlFor='email'>
                                <input id='email' {...register('email')} required type='email' placeholder='Email:' />
                            </label>
                        </div>   
                        <div className='label'>
                            <label htmlFor='message'>
                                <textarea id='message' {...register('message')} required type='text' placeholder='Tu mensaje:' />
                            </label>
                        </div>                     
                </div>
                        <button className='access' type="submit">ACCEDER</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;