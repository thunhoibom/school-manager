import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';

import "./Account.css";
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const Account = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([
    ]);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );


    return (
        <div className="bg-white font-medium w-full h-full pl-6 pt-2 pr-5 pb-5">
            <p className="font-medium text-2xl">Thông tin tài khoản</p>
            <p className="text-gray-600 pb-5">Cập nhật thông tin tài khoản của bạn ở đây.</p>
            <hr />

            <div className="pt-5 flex h-full">
                <div className="column">
                    <div className="column_element">
                        <label for="tid">Mã giáo viên</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tid" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tname">Họ và tên</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tname" placeholder="Watashi Wa Denji"></input>
                    </div>                <div className="column_element">
                        <label for="tschool">Trường</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tschool" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tbirth">Ngày sinh</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tbirth" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="thometown">Quê quán</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="thometown" placeholder="hmmmm"></input>
                    </div>

                    <div className="column_element">
                        <label for="tobject">Đối tượng</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tobject" placeholder="hmmmm"></input>
                    </div>

                </div>
                <div className="column ml-5">
                    <div className="column_element">
                        <label for="tsubject">Bộ môn</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tsubject" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="thomeroom">Giáo viên chủ nhiệm</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="thomeroom" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tphonenumber">Số điện thoại</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tphonenumber" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tinfo">Thông tin tài khoản</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tinfo" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tusername">Tên đăng nhập</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tusername" placeholder="hmmmm"></input>
                    </div>
                    <div className="column_element">
                        <label for="tpassword">Mật khẩu</label>
                        <input className="block  border border-gray-300 placeholder-gray-600 my-1 text-gray-900 text-sm rounded-lg w-full p-2 pl-2"
                            id="tpassword" placeholder="hmmmm"></input>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
            <>
                <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-circle"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {previewImage && (
                    <Image
                        wrapperStyle={{
                            display: 'none',
                        }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )}
            </>
            </div>
        </div>
    )
}

export default Account;
