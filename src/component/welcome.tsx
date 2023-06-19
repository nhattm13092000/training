import { NavLink } from 'react-router-dom';

const welcome = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <h1 className='text-6xl font-bold m-4'>Welcome</h1>
            <NavLink to="/lesson/" className='hover:text-blue-500'>👉 Go to lesson list </NavLink>
        </div>
    );
};

export default welcome;