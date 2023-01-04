import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Col, message, Rate, Row, Typography } from "antd";
import { RcFile } from "antd/es/upload";
import { ChangeEvent, FC, useRef, useState } from "react";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const SingleUserTopRow: FC = () => {
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange = (info: ChangeEvent<HTMLInputElement>) => {
    if (info.target?.files) {
      setLoading(true);
      getBase64(info.target.files[0] as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Zmień</div>
    </div>
  );
  return <Row>
    <Col>
      <input ref={uploadImageRef} type="file" style={{ display: "none" }} onChange={(e) => handleChange(e)} />
      <Avatar size={100} src={imageUrl} style={{ cursor: "pointer" }}
              onClick={() => uploadImageRef.current?.click()}>
        {!imageUrl && uploadButton}
      </Avatar></Col>
    <Col style={{ marginLeft: "5%" }}>
      <Row align="middle">
        <Typography.Title style={{ margin: "0" }}>Kamil Domański</Typography.Title>
        <Rate style={{ marginLeft: "6px" }} allowHalf disabled defaultValue={4.5} />
      </Row>
      <Row>
        <Typography.Text type="success" strong>Poziom 4</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>Księgowy w Echo sp. z.o.o</Typography.Text>
      </Row>
    </Col>
  </Row>;
};