import React from 'react';

const ModalMeetup = ({ handleClose, show, title, dateNextEvent, organizer }) => {
	const showHideclass = show ? 'modal display-block' : 'modal display-none';

	return (
		<div className={showHideclass}>
			<div className='modal-main modal-content'>
				<div className='modal-header'>
					<h2>
						{title}
					</h2>
				</div>
				<div className='modal-body'>
					<div className='form-group'>
						<label>
							Next Event:
						</label>
						<p className='form-control'>
							{dateNextEvent}
						</p>
					</div>
					<div className='form-group'>
						<label>
							Organizer:
						</label>
						<p className='form-control'>
							{organizer}
						</p>
					</div>
				</div>
				<div className='modal-footer'>
					<button className='btn btn-danger' onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};
export default ModalMeetup;