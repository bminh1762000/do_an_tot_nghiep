import React from "react";
import styled from "styled-components";
import {
  FaShippingFast,
  FaSync,
  FaCreditCard,
  FaComments,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Positive>
        <PositiveItem>
          <FaShippingFast size={55} color={"#d35400"} className="icon" />
          <div className="item-description">
            <p>Chính sách giao hàng</p>
            <p>Nhận hàng và thanh toán tại nhà </p>
          </div>
        </PositiveItem>
        <PositiveItem>
          <FaSync size={55} color={"#d35400"} className="icon" />
          <div className="item-description">
            <p>Chính sách giao hàng</p>
            <p>Nhận hàng và thanh toán tại nhà </p>
          </div>
        </PositiveItem>
        <PositiveItem>
          <FaCreditCard size={55} color={"#d35400"} className="icon" />
          <div className="item-description">
            <p>Chính sách giao hàng</p>
            <p>Nhận hàng và thanh toán tại nhà </p>
          </div>
        </PositiveItem>
        <PositiveItem>
          <FaComments size={55} color={"#d35400"} className="icon" />
          <div className="item-description">
            <p>Chính sách giao hàng</p>
            <p>Nhận hàng và thanh toán tại nhà </p>
          </div>
        </PositiveItem>
      </Positive>
      <InformationContact>
        <div className="introduction">
          <ul>
            <li className="title">Giới thiệu cửa hàng</li>
            <li>Giới thiệu </li>
            <li>Thông tin liên hệ</li>
            <li>Tin tức</li>
          </ul>
        </div>
        <div className="introduction">
          <ul>
            <li className="title">Hỗ trợ khách hàng</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Gửi yêu cầu bảo hành</li>
          </ul>
        </div>
        <div className="introduction">
          <ul>
            <li className="title">Chính sách chung</li>
            <li>Chính sách quy định chung</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả</li>
          </ul>
        </div>
        <div className="introduction">
          <ul>
            <li className="title">Thông tin khuyến mại</li>
            <li>Thông tin khuyến mại</li>
            <li>Sản phẩm khuyến mại</li>
            <li>Sản phẩm bán chạy</li>
            <li>Sản phẩm mới</li>
          </ul>
        </div>
      </InformationContact>
    </FooterContainer>
  );
};

<style></style>;

const FooterContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  padding: 0 1rem;
`;

const Positive = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  padding: 1rem 0;
  border-bottom: 2px dashed #b2bec3;
  border-top: 2px dashed #b2bec3;
`;

const PositiveItem = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 1rem;
    height: 100%;
    margin-bottom: 0.5rem;
  }
`;

const InformationContact = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;

  .introduction {
    ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 1rem;

      .title {
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 600;
        position: relative;
        margin-bottom: 1rem;

        &::before {
          content: "";
          position: absolute;
          width: 10rem;
          height: 2px;
          background-color: red;
          bottom: 0;
        }
      }

      li {
        padding-bottom: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;

export default Footer;
