const textFormat = (text) => {
	let formattedText = '';
	let isOpen = true;
	for (let i = 0; i < text.length; i++) {
			if (text[i] === '`') {
					if (isOpen) {
							formattedText += '<span class="tag">';
							isOpen = false;
					} else {
							formattedText += '</span>';
							isOpen = true;
					}
			} else {
					formattedText += text[i];
			}
	}
	return formattedText;
}

export default textFormat;
