import React from "react";
import { useDispatch } from "react-redux";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./HomePage.styles";
import Header from "../Header";

import { actions } from "modules/entities/modules/reports";

const HomePage = () => {
	const { styles } = useFelaEnhanced(felaRules);
	const dispatch = useDispatch();
	dispatch(actions.fetchMessagesRequest());

	return (
		<div className={styles.container}>
			<Header />
		</div>
	);
};

export default HomePage;
