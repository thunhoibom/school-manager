import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  notification,
  Popconfirm,
  Row,
  Space,
} from "antd";
import React, { useState } from "react";

function QuanLyThoiKhoaBieu() {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const showUpdateModal = () => {
    setIsUpdateModalVisible(true);
  };

  const handleCancel = () => {
    setIsCreateModalVisible(false);
    setIsUpdateModalVisible(false);
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

  return (
    <div className="bg-white font-medium w-full h-full pl-6 pt-2 pr-5 pb-5">
      <p className="font-medium text-2xl">Quản lí lịch kiểm tra</p>
      <p className="text-gray-600 pb-5">Cập nhật lịch kiểm tra ở đây.</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          <span style={{ marginRight: "60px" }}>Năm học: 2024-2025</span>Học kỳ:
          I
        </h3>
        <Button type="primary" onClick={showCreateModal}>
          Tạo mới
        </Button>
      </div>

      <Modal
        title="Thông tin lịch kiểm tra"
        open={isCreateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="them-lich-kiem-tra"
          style={{ width: "100%" }}
          layout="vertical"
          onFinish={onCreateFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="mon"
            label="Môn kiểm tra"
            rules={[{ required: true, message: "Vui lòng nhập môn kiểm tra" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="thoi_gian"
            label="Thời gian"
            rules={[{ required: true, message: "Vui lòng nhập thời gian" }]}
          >
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="so_bao_danh"
                label="Số báo danh"
                rules={[
                  { required: true, message: "Vui lòng nhập số báo danh" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phong_so"
                label="Phòng số"
                rules={[{ required: true, message: "Vui lòng nhập phòng số" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="Noi_dung_kiem_tra" label="Nội dung kiểm tra">
            <Input />
          </Form.Item>

          <Form.Item name="hinh_thuc_kiem_tra" label="Hình thức kiểm tra">
            <Input />
          </Form.Item>

          <Row>
            <Button onClick={handleCancel} style={{ marginRight: "10px" }}>
              Quay lại
            </Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Row>
        </Form>
      </Modal>

      <Modal
        title="Thông tin lịch kiểm tra"
        open={isUpdateModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="sua-lich-kiem-tra"
          style={{ width: "100%" }}
          layout="vertical"
          onFinish={onUpdateFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            mon: "Toán",
            thoi_gian: "90 phút",
            so_bao_danh: "123",
            phong_so: "10"
          }}
        >
          <Form.Item
            name="mon"
            label="Môn kiểm tra"
            rules={[{ required: true, message: "Vui lòng nhập môn kiểm tra" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="thoi_gian"
            label="Thời gian"
            rules={[{ required: true, message: "Vui lòng nhập thời gian" }]}
          >
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="so_bao_danh"
                label="Số báo danh"
                rules={[
                  { required: true, message: "Vui lòng nhập số báo danh" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phong_so"
                label="Phòng số"
                rules={[{ required: true, message: "Vui lòng nhập phòng số" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="Noi_dung_kiem_tra"
            label="Nội dung kiểm tra"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="hinh_thuc_kiem_tra"
            label="Hình thức kiểm tra"
          >
            <Input />
          </Form.Item>

          <Row>
            <Button onClick={handleCancel} style={{ marginRight: "10px" }}>
              Quay lại
            </Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Row>
        </Form>
      </Modal>

      <Space direction="vertical" style={{ width: "100%" }}>
        <Row gutter={30}>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>
                Môn kiểm tra: <b>Toán</b>
              </p>
              <p>
                Thời gian: <b>90 phút</b>
              </p>
              <Row>
                <Col span={16}>
                  <p>
                    Số báo danh: <b>123</b>
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    Phòng số: <b>10</b>
                  </p>
                </Col>
              </Row>
              <p>Nội dung kiểm tra:</p>
              <p>Hình thức kiểm tra:</p>
              <Row justify={"space-around"}>
                <Button onClick={showUpdateModal}>Chỉnh sủa</Button>
                <Popconfirm
                  title="Thông báo"
                  description="Bạn muốn xóa lịch kiểm tra"
                  okText="Xóa"
                  cancelText="Hủy"
                  onConfirm={openRemoveNotification}
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </Row>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default QuanLyThoiKhoaBieu;
