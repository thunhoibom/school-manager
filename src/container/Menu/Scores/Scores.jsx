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

function Scores() {
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
        stt: i + 1,
        ma_lop: "L001",
        ten_lop: "6A1",
        ma_hs: `HS00${i}`,
        ten_hs: "Nguyễn Văn A",
        thuong_xuyen: "8",
        giua_ki: "9",
        cuoi_ki: "8",
        tbm: "8.5"
    })))


    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
        },
        {
            title: "Mã lớp",
            dataIndex: "ma_lop",
            key: "ma_lop",
        },
        {
            title: "Tên lớp",
            dataIndex: "ten_lop",
            key: "ten_lop",
        },
        {
            title: "Mã HS",
            dataIndex: "ma_hs",
            key: "ma_hs",
        },
        {
            title: "Tên HS",
            dataIndex: "ten_hs",
            key: "ten_hs",
        },
        {
            title: "Thường xuyên",
            dataIndex: "thuong_xuyen",
            key: "thương_xuyen",
            align: "center"
        },
        {
            title: "Giữa kì",
            dataIndex: "giua_ki",
            key: "giua_ki",
        },
        {
            title: "Cuối kì",
            dataIndex: "cuoi_ki",
            key: "cuoi_ki",
        },
        {
            title: "TBM",
            dataIndex: "tbm",
            key: "tbm",
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
                        description="Bạn muốn xóa học sinh"
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
            <p className="font-medium text-2xl">Quản lí điểm</p>
            <p className="text-gray-600 pb-5">Cập nhật điểm học sinh bạn ở đây.</p>
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
                title="Sửa điểm học sinh"
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
                    <Form.Item name="ma_lop" label="Mã lớp" rules={[{ required: true }]}>
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="ten_lop"
                        label="Tên lớp"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item name="ma_hs" label="Mã HS" rules={[{ required: true }]}>
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item name="ten_hs" label="Tên HS" rules={[{ required: true }]}>
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="thuong_xuyen"
                        label="Thường xuyên"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="giua_ki"
                        label="Giữa kì"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="cuoi_ki"
                        label="Cuối kì"
                        rules={[{ required: true }]}
                    >
                        <Input style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        name="tbm"
                        label="TBM"
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

export default Scores;
