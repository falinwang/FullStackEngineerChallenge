import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const displayInfo = () => {
    console.log(name, password);
  };

  return (
    <div className='App'>
      <Navigation transparent />
      <section className=' w-full h-full'>
        <div className='absolute top-0 w-full h-full bg-gray-900'></div>
        <div className='container pt-20 mx-auto px-4 h-full'>
          <div className='w-full mx-auto lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
              <div className='flex-auto px-6 lg:px-10 py-10 '>
                <div className='text-gray-500 text-center mb-3 font-bold'>
                  <h6 className='text-gray-600 text-sm font-bold'>Sign Up</h6>
                </div>
                <form>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Email'
                      style={{ transition: 'all .15s ease' }}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Password'
                      style={{ transition: 'all .15s ease' }}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Password'
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div>
                    <label className='inline-flex items-center cursor-pointer'>
                      <input
                        id='customCheckLogin'
                        type='checkbox'
                        className='form-checkbox text-gray-800 ml-1 w-5 h-5'
                        style={{ transition: 'all .15s ease' }}
                      />
                      <span className='ml-2 text-sm font-semibold text-gray-700'>
                        Admin account
                      </span>
                    </label>
                  </div>
                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                      onClick={displayInfo}
                    >
                      Create an account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer absolute />
      </section>
    </div>
  );
}

export default App;
