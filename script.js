// Define constants for elements
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// Focus on the input field when the page loads
textarea.focus();

// Add an event listener to the textarea for keyup events
textarea.addEventListener("keyup", handleTextareaInput);

// Handle textarea input
function handleTextareaInput(e) {
	const input = e.target.value;
	if (e.key === "Enter") {
		clearInputField();
		randomSelect();
	} else {
		createTags(input);
	}
}

// Create tags based on input
function createTags(input) {
	const tags = input
		.split(",")
		.map((tag) => tag.trim())
		.filter((tag) => tag !== "");

	// Clear existing tags
	clearTags();

	// Create and append new tags
	tags.forEach((tag) => {
		appendTag(tag);
	});
}

// Clear input field
function clearInputField() {
	textarea.value = "";
}

// Clear displayed tags
function clearTags() {
	tagsEl.innerHTML = "";
}

// Append a new tag to the tags container
function appendTag(tag) {
	const tagEl = document.createElement("span");
	tagEl.classList.add("tag");
	tagEl.innerText = tag;
	tagsEl.appendChild(tagEl);
}

// Randomly select and highlight a tag
function randomSelect() {
	const times = 30;
	const intervalTime = 100;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		highlightTag(randomTag);

		setTimeout(() => {
			unHighlightTag(randomTag);
		}, intervalTime);
	}, intervalTime);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, intervalTime);
	}, times * intervalTime);
}

// Pick a random tag from the displayed tags
function pickRandomTag() {
	const tags = document.querySelectorAll(".tag");
	return tags[Math.floor(Math.random() * tags.length)];
}

// Highlight a tag by adding the 'highlight' class
function highlightTag(tag) {
	tag.classList.add("highlight");
}

// Unhighlight a tag by removing the 'highlight' class
function unHighlightTag(tag) {
	tag.classList.remove("highlight");
}
