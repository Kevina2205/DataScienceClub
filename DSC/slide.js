const activeSlide = "IndividualSlide active";
// Ini cara tolol. Karna buru buru jadi terpaksa pake cara manual. Good luck siapapun yang ngeliat ini di masa depan. <3 kepina
const prev = () => {
	const slides = document.querySelectorAll(".IndividualSlide");
	for (let i = 0; i < 3; i++) {
		if (slides[i].classList[1] !== "active") continue;
		slides[i].className = "IndividualSlide";
		if (i == 2) return (slides[i - 1].className = activeSlide);
		if (i == 1) return (slides[i - 1].className = activeSlide);
		if (i == 0) return (slides[2].className = activeSlide);
	}
};
const next = () => {
	const slides = document.querySelectorAll(".IndividualSlide");
	for (let i = 0; i < 3; i++) {
		if (slides[i].classList[1] !== "active") continue;
		slides[i].className = "IndividualSlide";
		if (i == 2) return (slides[0].className = activeSlide);
		if (i == 1) return (slides[i + 1].className = activeSlide);
		if (i == 0) return (slides[i + 1].className = activeSlide);
	}
};
