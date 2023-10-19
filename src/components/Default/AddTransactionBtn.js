import AddIcon from "../../assets/imgs/add-icon.png";
import React from "react";
const AddTransactionBtn = (props) => {
	const { openAddReportModalHandler } = props;
	return (
		<div onClick={openAddReportModalHandler} className="add-budget">
			<p>Add</p>
			<img src={AddIcon} alt="" />
		</div>
	);
};

export default AddTransactionBtn;