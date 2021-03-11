function commentReplyToggle(parent_id) {
	const row = document.getElementById(parent_id);

	if (row.classList.contains('d-none')) {
		row.classList.remove('d-none');
	} else {
		row.classList.add('d-none');
	}
}