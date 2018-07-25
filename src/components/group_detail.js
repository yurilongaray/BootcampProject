import React, {Component} from 'react';

const GroupDetailModal = ({ handleClose, show, children }) => {
	const showHideclass = show ? 'modal display-block' : 'modal display-none';

	return (
		<div classNameName={ showHideclass }>
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal">&times;</button>
					<h4 className="modal-title">Modal Header</h4>
				</div>
				<div className="modal-body">
					{ children }
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				</div>	
			</div>
			<div className="modal fade" id="myModal" role="dialog">
			<div className="modal-dialog">		  
		  </div>
		  
		</div>
	  </div>
	  
	);
};

export default GroupDetailModal;