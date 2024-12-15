import { Link, useLocation, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Button } from "antd";

import { FaUser } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

import { RiAccountCircleLine } from "react-icons/ri";
import { PiExam } from "react-icons/pi";
import { LuBookText } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineNoteAlt } from "react-icons/md";
import { PiStudent } from "react-icons/pi";



import './Menu.css';
function Menu() {
    const [userFullName, setUserFullName] = useState("Watashi Wa Denji");
    const [schoolName, setSchoolName] = useState("Trường THCS ____ ____");


    return (
        <div className="overflow-hidden">
            <div className="menu_header bg-white">
                <div className="menu_header_user-information ml-7">
                    <div className="mr-2">
                        <FaUser className="text-3xl " />
                    </div>
                    <div className="">
                        <p className="font-medium">{userFullName}</p>
                        <p className="text-xl font-light">{schoolName}</p>
                    </div>
                </div>
                <input placeholder="🔍 Tìm kiếm" className="shadow bg-white-50 border border-white-300 text-dark-900 w-2/4 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block  p-2.5 white:bg-dark-700 white:border-dark-600 white:placeholder-dark-400 white:focus:ring-blue-500 white:focus:border-blue-500"></input>
                <button className="mr-10"><IoNotificationsCircleOutline className="text-4xl" /></button>
            </div>

            <div className="flex h-full w-full">
                <div className="sidebar h-auto bg-white shadow-inner">
                    <div className="">
                        <Link to="account">
                            <div className="flex items-center">
                                <RiAccountCircleLine /><p>&nbsp;&nbsp;Thông tin tài khoản</p>
                            </div>
                        </Link>
                        <Link to="scores">
                            <div className="flex items-center">
                                <PiExam /><p>&nbsp;&nbsp;Quản lí điểm</p>
                            </div>
                        </Link>
                        <Link to="subjects">
                            <div className="flex items-center">
                                <LuBookText /><p>&nbsp;&nbsp;Quản lí môn học</p>
                            </div>
                        </Link>
                        <Link to="schedule">
                            <div className="flex items-center">
                                <MdOutlineNoteAlt /><p>&nbsp;&nbsp;Quản lí thời khóa biểu</p>
                            </div>
                        </Link>
                        <Link to="exams">
                            <div className="flex items-center">
                                <RiCalendarScheduleLine /><p>&nbsp;&nbsp;Quản lí lịch kiểm tra</p>
                            </div>
                        </Link>
                        <Link to="students">
                            <div className="flex items-center">
                                <PiStudent /><p>&nbsp;&nbsp;Quản lí học sinh</p>
                            </div>
                        </Link>
                        <div className="pt-3">
                            <Link to="/login">
                                <Button color="danger" size="large" block variant="filled"><CiLogout />Đăng xuất</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="p-7 h-full">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu;