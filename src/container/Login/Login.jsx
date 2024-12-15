import { useState } from 'react'
import { MdOutlineHelp } from "react-icons/md";

import './Login.css';
function Login() {
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("")
  return (
    <div className='login'>
      <div className='header '>
          <a href='#' className='absolute mt-2 right-5 text-white items-center flex'><MdOutlineHelp className='mr-1'/>Hỗ trợ</a>
      </div>
      <form className='login_form'>
          <h1 className='text-4xl mt-20 font-bold white:text-dark mb-7'>Đăng nhập</h1>
          <div className='login_form_input-frame'>
            <label for="login-pn" className='block text-sm font-medium text-gray-900 '><strong>Số điện thoại</strong></label>
            <input id="login-pn"
                    placeholder='Nhập số điện thoại' 
                    className=" text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-px dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => {
                     setPhonenumber(event.target.value); 
                    }}></input>
            <hr></hr>
          </div>
          <div className='login_form_input-frame'>
            <label for="login-pw" className='block text-sm font-medium text-gray-900 '><strong>Mật khẩu</strong></label>
            <input id="login-pw"
             placeholder='Nhập mật khẩu' 
             type="password" className=" text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-px dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={(event)=>{
              setPassword(event.target.value);
             }}></input>
            <hr></hr>
          </div>
          <button className="disabled:bg-gray-300 disabled:hover:bg-gray-300 mt-6 w-4/5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
           type='submit'
            disabled={phonenumber && password  ? false: true} 
            >Đăng nhập</button>

          <a href='#' className='mt-8'>Quên mật khẩu?</a>
          
          <div>
            Chưa có tài khoản?  <a href="#">Đăng kí</a>
          </div>
      </form>
      <div className='footer'>

      </div>
    </div>
  )
}
export default Login;