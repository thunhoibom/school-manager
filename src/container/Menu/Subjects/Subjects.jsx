import React, { useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    notification,
    Table,
    Popconfirm,
} from "antd";

function Subjects() {
    const [isUpdateModalVisible, setUpdateIsModalVisible] = useState(false);





    const handleCancel = () => {
        setUpdateIsModalVisible(false);
    };


    const openUpdateNotification = () => {
        notification.success({
            message: "Chỉnh sửa thành công",
            placement: "topRight",
            duration: 2,
        });
    };

    const openRemoveNotification = () => {
        notification.success({
            message: "Xóa thành công",
            placement: "topRight",
            duration: 2,
        });
    };



    const onFinishFailed = (errorInfo) => {
        console.log("Lỗi khi submit form: ", errorInfo);
    };

    const [dataSource, setDataSource] = useState(Array.from({ length: 10 }).map((_, i) => ({
        key: i,
        ma_mon_hoc: `M${i}`,
        ten_mon_hoc: "Toán",
        ten_giao_vien: "Nguyệt",
        sdt: `0124567890`,
        ten_lop:'6A'
    })))


    const columns = [
        {
            title: "Mã môn học",
            dataIndex: "ma_mon_hoc",
            key: "ma_mon_hoc",
        },
        {
            title: "Tên môn học",
            dataIndex: "ten_mon_hoc",
            key: "ten_mon_hoc",
        },
        {
            title: "Giáo viên",
            dataIndex: "ten_giao_vien",
            key: "ten_giao_vien",
        },
        {
            title: "Số điện thoại",
            dataIndex: "sdt",
            key: "sdt",
        },
        {
            title: "Lớp",
            dataIndex: "ten_lop",
            key: "ten_lop",
            align: "center"
        },
        {
            title: "Chi tiết",
            key: "detail",
            render: (_, record) => (
                <>
                    <Button onClick={() => showUpdateModal(record)} style={{ marginRight: "15px" }}>
                        Chỉnh sửa
                    </Button>
                    <Popconfirm
                        title="Thông báo"
                        description="Bạn muốn xóa môn học"
                        okText="Xóa"
                        cancelText="Hủy"
                        onConfirm={() => handleDelete(record.key)}
                    >
                        <Button>Xóa</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    const handleDelete = (key) => {
        const updatedData = dataSource.filter((item) => item.key !== key);
        setDataSource(updatedData);
        openRemoveNotification();
    };
    const handleTableChange = (pagination, filters, sorter, extra) => {
        console.log("Current Table Data:", extra.currentDataSource);
    };


    const [editingRow, setEditingRow] = useState(null);

    const showUpdateModal = (record) => {
        setEditingRow(record);
        setUpdateIsModalVisible(true);
    };

    const onUpdateFinish = (updatedValues) => {
        const updatedData = dataSource.map((item) =>
            item.key === editingRow.key ? { ...item, ...updatedValues } : item
        );
        setDataSource(updatedData); // Update the table
        openUpdateNotification();
        handleCancel();
    };

    return (
        <div className="bg-white font-medium w-full h-full pl-6 pt-2 pr-5 pb-5">
            <p className="font-medium text-2xl">Quản lí môn học</p>
            <p className="text-gray-600 pb-5">Cập nhật môn học ở đây.</p>
            <hr />
            <div className="pt-2" >
                <h3>Năm học: 2024-2025</h3>

            </div>

            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                onChange={handleTableChange}
                key={1}
                bordered
            />

            <Modal
                title="Sửa môn học"
                open={isUpdateModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="sua-diem-hoc-sinh"
                    style={{
                        maxWidth: "600px",
                    }}
                    layout="vertical"
                    onFinish={onUpdateFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={editingRow}
                >

                    <Form.Item
                        name="ma_mon_hoc"
                        label="Mã môn học"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item name="ten_mon_hoc"
                     label="Tên môn học"
                    rules={[{ required: true }]}>
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item name="ten_giao_vien" label="Giáo viên" rules={[{ required: true }]}>
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="sdt"
                        label="Số điện thoại"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="ten_lop"
                        label="Lớp"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Button onClick={handleCancel} style={{ marginRight: "20px" }}>
                        Quay lại
                    </Button>

                    <Button type="primary" htmlType="submit">
                        Lưu
                    </Button>
                </Form>
            </Modal>
        </div>
    );
}

export default Subjects;
