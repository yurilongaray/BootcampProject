import React from 'react';

const ModalMeetup = ({ handleClose, show, children }) => {
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
export default ModalMeetup;