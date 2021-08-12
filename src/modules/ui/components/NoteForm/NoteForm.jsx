import Button from "../Button";
import React from "react";
import { Input } from "antd";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./NoteForm.styles";

const { TextArea } = Input;

const NoteForm = ({ note }) => {
	const { styles } = useFelaEnhanced(felaRules);

	return (
		<form>
			<textarea className={styles.TextArea} value={note} />
			<div className={styles.ButtonBox}>
				<Button type="secondary">Save</Button>
			</div>
		</form>
	);
};

export default NoteForm;
