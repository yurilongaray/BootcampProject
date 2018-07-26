import React, {Component} from 'react';

const GroupDetailModal = ({ handleClose, show, children }) => {
	const showHideclass = show ? 'modal display-block' : 'modal display-none';

	return (

		<div className={showHideclass}>
			<div className="modal-main modal-content">
				<div className="modal-body">
					{ children }
				</div>
				<div className="modal-footer">
					<button className="btn btn-default" onClick={handleClose}>Close</button>
				</div>
			</div>
		</div>		  
	);
};

export default GroupDetailModal;