import React from "react";
import { Modal, Typography, Col, Row } from "antd";
import { CopyOutlined } from "@ant-design/icons";

import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./CardDetail.styles";
import { FormattedMessage, FormattedDate } from "react-intl";
import Button from "../Button";
import NoteForm from "../NoteForm";
const CardDetail = ({ message, onCancel, visible }) => {
	const { styles } = useFelaEnhanced(felaRules);
	const { Title, Text, Paragraph } = Typography;
	console.log(message);
	const {
		appName,
		platform,
		appVersion,
		date,
		note,
		deviceModel,
		osVersion,
		bundleId,
	} = message;

	return (
		<div id="modalMount" className={styles.cardDetail}>
			<Modal
				visible={visible}
				onCancel={onCancel}
				className={styles.modal}
				width={1000}
				centered
				getContainer="#modalMount"
				footer={[
					<>
						<Button type="secondary">
							<FormattedMessage id="card.button.delete" />
						</Button>
						<Button type="primary" icon={<CopyOutlined />}>
							<FormattedMessage id="card.button.copy" />
						</Button>
					</>,
				]}
			>
				<Row>
					<Col className={styles.textBox} sm={12}>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.appName" />
						</Text>
						<h1 className={styles.mainTitle}>{appName}</h1>
						<div className={styles.info}>
							<Col sm={12}>
								<Text className={styles.subTitle}>
									<FormattedMessage id="card.detail.os" />
								</Text>
								<Paragraph className={styles.subName}>{platform}</Paragraph>
							</Col>
							<Col sm={12}>
								<Text className={styles.subTitle}>
									<FormattedMessage id="card.detail.device" />
								</Text>
								<Paragraph className={styles.subName}>{deviceModel}</Paragraph>
							</Col>
						</div>
						<div className={styles.info}>
							<Col sm={12}>
								<Text className={styles.subTitle}>
									<FormattedMessage id="card.detail.appVersion" />
								</Text>
								<Paragraph className={styles.subName}>{appVersion}</Paragraph>
							</Col>
							<Col sm={12}>
								<Text className={styles.subTitle}>
									<FormattedMessage id="card.detail.dateTime" />
								</Text>
								<Paragraph className={styles.subName}>
									<FormattedDate date={date} />
								</Paragraph>
							</Col>
						</div>
						<Text className={styles.subTitle}>Note</Text>
						<NoteForm />
						<h3 className={styles.secondTitle}>Custom developer data</h3>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.id" />
						</Text>
						<Paragraph className={styles.subName}>{bundleId}</Paragraph>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.osVersion" />
						</Text>
						<Paragraph className={styles.subName}>{osVersion}</Paragraph>

						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.mediaUploaded" />
						</Text>
						<Paragraph className={styles.subName}>mediaUploaded</Paragraph>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.deviceMake" />
						</Text>
						<Paragraph className={styles.subName}>deviceMake</Paragraph>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.bundleId" />
						</Text>
						<Paragraph className={styles.subName}>bundleId</Paragraph>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.customData" />
						</Text>
						<Paragraph className={styles.subName}>customData</Paragraph>
						<Text className={styles.subTitle}>
							<FormattedMessage id="card.detail.buildNumber" />
						</Text>
						<Paragraph className={styles.subName}>buildNumber</Paragraph>
					</Col>
					<Col sm={12} className={styles.screenBox}>
						<img className={styles.screenshot} src={"screenshot.png"} />
					</Col>
				</Row>
			</Modal>
		</div>
	);
};
export default CardDetail;
