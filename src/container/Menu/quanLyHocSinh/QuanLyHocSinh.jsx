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

function QuanLyHocSinh() {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isUpdateModalVisible, setUpdateIsModalVisible] = useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const showUpdateModal = () => {
    setUpdateIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsCreateModalVisible(false);
    setUpdateIsModalVisible(false);
  };

  const openCreateNotification = () => {
    notification.success({
      message: "Thêm mới thành công",
      placement: "topRight",
      duration: 2,
    });
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

  const onCreateFinish = () => {
    openCreateNotification();
    handleCancel();
  };

  const onUpdateFinish = () => {
    openUpdateNotification();
    handleCancel();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Lỗi khi submit form: ", errorInfo);
  };

  const dataSource = [
    {
      key: "1",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "2",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "3",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "4",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "5",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "6",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "7",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
    {
      key: "8",
      stt: "1",
      ma_lop: "L001",
      ten_lop: "6A1",
      ma_hs: "HS001",
      ten_hs: "Nguyễn Văn A",
      username: "nguyenvana2024",
      password: "12345678",
    },
  ];

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
      title: "Tên tài khoản",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Chi tiết",
      key: "detail",
      render: () => (
        <>
          <Button onClick={showUpdateModal} style={{ marginRight: "15px" }}>
            Chỉnh sửa
          </Button>
          <Popconfirm
            title="Thông báo"
            description="Bạn muốn xóa học sinh"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={openRemoveNotification}
          >
            <Button>Xóa</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white font-medium w-full h-full pl-6 pt-2 pr-5 pb-5">
      <p className="font-medium text-2xl">Quản lí học sinh</p>
      <p className="text-gray-600 pb-5">Cập nhật học sinh ở đây.</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Năm học: 2024-2025</h3>
        <Button type="primary" onClick={showCreateModal}>
          Thêm học sinh
        </Button>
      </div>

      <Modal
        title="Thông tin học sinh"
        open={isCreateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="them-hoc-sinh"
          style={{
            maxWidth: "600px",
          }}
          layout="vertical"
          onFinish={onCreateFinish}
          onFinishFailed={onFinishFailed}
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
            name="username"
            label="Tên tài khoản"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true }]}
          >
            <Input.Password style={{ width: "100%" }} />
          </Form.Item>

          <Button onClick={handleCancel} style={{ marginRight: "20px" }}>
            Quay lại
          </Button>

          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form>
      </Modal>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        key={1}
        bordered
        style={{
          marginTop: "30px",
        }}
      />

      <Modal
        title="Thông tin học sinh"
        open={isUpdateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="chinh-sua-hoc-sinh"
          style={{
            maxWidth: "600px",
          }}
          layout="vertical"
          onFinish={onUpdateFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ma_lop: "L001",
            ten_lop: "6A1",
            ma_hs: "HS001",
            ten_hs: "Nguyễn Văn A",
            username: "nguyenvana2024",
            password: "12345678",
          }}
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
            name="username"
            label="Tên tài khoản"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true }]}
          >
            <Input.Password style={{ width: "100%" }} />
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

export default QuanLyHocSinh;
