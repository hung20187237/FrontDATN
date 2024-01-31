import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {
  ButtonSubmit,
  DivFooter,
  ModalCustom,
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {Col, Row, Space} from "antd";
import {ReportContainer} from "../../../../components/post/styled";

const InfoModal = ({ title, visible, onCancel, onsubmit, data }) => {

  return (
      <ModalCustom
          width={'800px'}
          title={title}
          open={visible}
          onCancel={onCancel}
          footer={
            <DivFooter>
              <ButtonSubmit
                  onClick={() => {
                    onsubmit(data.postReportId ? '2' : '3');
                    onCancel();
                  }}
              >
                Check Report
              </ButtonSubmit>
              <ButtonSubmit
                  onClick={() => {
                    onCancel();
                  }}
              >
                Đóng
              </ButtonSubmit>
            </DivFooter>
          }
      >
        <ReportContainer>
          <h3>
            Nội dung Report
          </h3>
            <Row>
                <Col span={4}>
                    UserId:
                </Col>
                <Col span={20}>
                    {data.userId}
                </Col>
            </Row>
            {data.postReportId ? (
                <Row>
                    <Col span={4}>
                        PostId:
                    </Col>
                    <Col span={20}>
                        {data.postReportId}
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col span={4}>
                        CommentId:
                    </Col>
                    <Col span={20}>
                        {data.commentReportId}
                    </Col>
                </Row>
            )}
          <Row>
            <Col span={4}>
              Vấn đề:
            </Col>
            <Col span={20}>
                {data.ReportProblemId === '1' && 'Nội dung sai lệch/ Tin giả'}
                {data.ReportProblemId === '2' && 'Từ ngữ đồi trụy, kích động'}
                {data.ReportProblemId === '3' && 'Từ ngữ xúc phạm, công kích'}
                {data.ReportProblemId === '4' && 'Khác...'}
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              Ý kiến của User:
            </Col>
            <Col span={20}>
              {data.desc}
            </Col>
          </Row>
        </ReportContainer>
      </ModalCustom>
  );
};

export default InfoModal;
