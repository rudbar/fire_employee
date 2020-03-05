function myMove() {
	var elem;
	elem = document.getElementById("employee");
	var pos;
	pos = 0;
	var id;

	id = setInterval(frame, 5);

	function frame() {
		if (pos == 350000000000000000000000000) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
};