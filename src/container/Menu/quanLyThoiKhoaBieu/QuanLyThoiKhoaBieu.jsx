import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  notification,
  Table,
  Menu,
  Dropdown,
  Popconfirm,
  Row,
  Col,
} from "antd";

function QuanLyThoiKhoaBieu() {
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
      ca: "1",
      monday: "Toán",
      tuesday: "Lý",
      wednesday: "Hóa",
      thursday: "Anh",
      friday: "Sinh",
      saturday: "Sử",
      sunday: "Nghỉ",
    },
    {
      key: "2",
      ca: "2",
      monday: "Văn",
      tuesday: "Toán",
      wednesday: "Địa",
      thursday: "Tin",
      friday: "GDCD",
      saturday: "Công nghệ",
      sunday: "Nghỉ",
    },
    {
      key: "3",
      ca: "3",
      monday: "Lý",
      tuesday: "Sinh",
      wednesday: "Anh",
      thursday: "Hóa",
      friday: "Thể dục",
      saturday: "Toán",
      sunday: "Nghỉ",
    },
  ];

  const columns = [
    {
      title: "Ca",
      dataIndex: "ca",
      key: "ca",
    },
    {
      title: "Thứ 2",
      dataIndex: "monday",
      key: "monday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Thứ 3",
      dataIndex: "tuesday",
      key: "tuesday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Thứ 4",
      dataIndex: "wednesday",
      key: "wednesday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Thứ 5",
      dataIndex: "thursday",
      key: "thursday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Thứ 6",
      dataIndex: "friday",
      key: "friday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Thứ 7",
      dataIndex: "saturday",
      key: "saturday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
    {
      title: "Chủ nhật",
      dataIndex: "sunday",
      key: "sunday",
      render: (text) => (
        <Dropdown overlay={menu(text)} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>{text}</a>
        </Dropdown>
      ),
    },
  ];

  const handleMenuClick = (action) => {
    if (action === "edit") showUpdateModal();
  };

  const menu = () => (
    <Menu>
      <Row>
        <Col span={12}>
          <Menu.Item key="edit" onClick={() => handleMenuClick("edit")}>
            Sửa
          </Menu.Item>
        </Col>
        <Col span={12}>
          <Menu.Item key="delete" danger>
            <Popconfirm
              title="Thông báo"
              description="Bạn muốn xóa ca học"
              okText="Xóa"
              cancelText="Hủy"
              onConfirm={openRemoveNotification}
            >
              Xóa
            </Popconfirm>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <div className="bg-white font-medium w-full h-full pl-6 pt-2 pr-5 pb-5">

      <p className="font-medium text-2xl">Quản lí thời khóa biểu</p>
      <p className="text-gray-600 pb-5">Cập nhật thời khóa biểu ở đây.</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Năm học: 2024-2025</h3>
        <Button type="primary" onClick={showCreateModal}>
          Tạo mới
        </Button>
      </div>

      <Modal
        title="Thông tin TKB"
        open={isCreateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="them-tkb"
          style={{
            maxWidth: "600px",
          }}
          layout="vertical"
          onFinish={onCreateFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="thu" label="Thứ" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="ca" label="Ca" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="mon" label="Môn" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="giao_vien"
            label="Giáo viên"
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
        title="Thông tin TKB"
        open={isUpdateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="chinh-sua-tkb"
          style={{
            maxWidth: "600px",
          }}
          layout="vertical"
          onFinish={onUpdateFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            thu: "Thứ 2",
            ca: "1",
            mon: "Toán",
            giao_vien: "Nguyễn Văn A",
          }}
        >
          <Form.Item name="thu" label="Thứ" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="ca" label="Ca" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="mon" label="Môn" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="giao_vien"
            label="Giáo viên"
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
    </ div>
  );
}

export default QuanLyThoiKhoaBieu;
