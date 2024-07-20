import { Dispatch, SetStateAction, useState } from "react";
import { Col, DatePicker, Divider, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { handlingError } from "../../pages/_app";
import useAuth from "@api/customHooks/useAuth";
import useFetcher from "@api/customHooks/useFetcher";
import { useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "@services/reactQuery/users";
import { useDetailEventQuery } from "@services/reactQuery/calendar";
import DocElement from "@components/Util/DocElement";
import UnitConvert from "@components/Util/UnitConvert";

const ModalDetailEvent = ({
    visible,
    setVisible,
    onFinish,
    id
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    onFinish: () => void;
    id?: number | undefined
}) => {
    const uq = useQueryClient();

    const { handleLogout } = useAuth();

    const [loading, setLoading] = useState(false);

    const dataDetail = useDetailEventQuery({
        enabled: id != undefined ? true : false,
        id: id
    })

    const data = dataDetail?.data?.data?.data

    return (
        <>
            <Modal
                open={visible}
                title="Detail Event"
                footer={false}
                // onCancel={async () => {
                //     setVisible(false);
                // }}
                // onOk={() => {
                //     handleEditSubmit()
                // }}
                okButtonProps={{ loading: loading }}
            >
                <Divider style={{ margin: 0 }}/>
                <Row style={{ marginTop: 10 }}>
                    <Col span={24}>
                        <DocElement label="Title" data={data?.title} />
                        <DocElement label="Start Event" data={UnitConvert?.FormatDate(data?.start_date)} />
                        <DocElement label="End Event" data={UnitConvert?.FormatDate(data?.end_date)} />
                        <DocElement label="Title"  />
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default ModalDetailEvent;
