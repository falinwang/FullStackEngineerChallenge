import './App.css';
import { useState, setState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Axios from 'axios';

const initialState = {
  username: '',
  email: '',
  password: '',
  repeat_password: '',
};

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');

  const [employeeList, setEmployeeList] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const addEmployee = () => {
    Axios.post('http://localhost:5000/auth/signup', {
      username: username,
      email: email,
      password: password,
      repeat_password: repeat_password,
    })
      .then((data) => {
        console.log('success', data.status);
      })
      .then(() => {
        setUsername('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
      });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:5000/employees').then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put('http://localhost:5000/employees', {
      username: newUsername,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                username: val.newUsername,
                password: val.password,
                email: val.email,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:5000/delete/:${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className='App'>
      <Navigation transparent />
      <section className='w-full h-full bg-gray-900'>
        <div className='container pt-20 mx-auto px-4'>
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
                      Username
                    </label>
                    <input
                      type='text'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Username'
                      style={{ transition: 'all .15s ease' }}
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>

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
                        setEmail(event.target.value);
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
                      placeholder='Confirm Password'
                      style={{ transition: 'all .15s ease' }}
                      onChange={(event) => {
                        setRepeatPassword(event.target.value);
                      }}
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
                      onClick={addEmployee}
                    >
                      Create an account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='container pt-4 pb-10 mx-auto px-4 '>
          <div className='w-full mx-auto lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
              <div className='flex-auto px-6 lg:px-10 py-10 '>
                <button
                  className='bg-indigo-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                  type='button'
                  style={{ transition: 'all .15s ease' }}
                  onClick={getEmployees}
                >
                  View ALL Employee
                </button>
                {employeeList.map((val, key) => {
                  return (
                    <div className='employee py-3'>
                      <div>
                        <h3>Username: {val.username}</h3>
                        <h3>Email: {val.email}</h3>
                      </div>
                      <div className='my-4'>
                        <input
                          className='px-3 py-3 my-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                          type='text'
                          placeholder='New username'
                          onChange={(event) => {
                            setNewUsername(event.target.value);
                          }}
                        />
                        <div className='my-2'>
                          <button
                            className='bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1'
                            type='button'
                            onClick={() => {
                              updateEmployee(val.id);
                            }}
                          >
                            Update
                          </button>

                          <button
                            className='text-gray-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1'
                            onClick={() => {
                              deleteEmployee(val.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
