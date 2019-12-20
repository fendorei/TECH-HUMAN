const jsTextHight = document.querySelector(".Test-hight");
	const jsTestMedium = document.querySelector(".Test-medium");

				const jsTestDown = document.querySelector(".Test-down")
		const jsSizeImage = document.querySelector(".sizeImage");
		const jsButtonTest = document.querySelector(".buttonTest");

		const jsButtonDef = document.querySelector(".buttonDef");
			const jsSeparationButton = document.querySelector(".separationButton");

			const menuButtonElement = document.querySelector(".menuForHamburger")
			const menuElement = document.querySelector('.js-menu')
				const jsSeparationTest = document.querySelector('.separationTest')
					const jsHamburger = document.querySelector('.hamburger')
        const jsTop = document.querySelector('.top')
				const jsMiddle = document.querySelector('.middler')
			const jsBottom = document.querySelector('.bottom')








		menuButtonElement.addEventListener(
		    'click',
		    () =>
		    {
		      menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
					  jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')
						jsHamburger.classList.toggle('is-active')


		    }
		)
		menuElement.addEventListener(
		    'click',
		    () =>
		    {
		      menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
					  jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')
						jsHamburger.classList.toggle('is-active')

		    }
		)
		jsTop.addEventListener(
				'click',
				() =>
				{


					menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
					  jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')
					jsHamburger.classList.toggle('is-active')



				}
		)
		jsMiddle.addEventListener(
				'click',
				() =>
				{


					menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
					  jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')
					jsHamburger.classList.toggle('is-active')



				}
		)
		jsHamburger.addEventListener(
				'click',
				() =>
				{


					menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
						jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')



				}
		)
		document.addEventListener('keydown', (event) =>
		{
		    if(event.key === 'Escape' && menuElement.classList.contains('is-active'))
		    {
					menuElement.classList.toggle('is-active')
					 jsTextHight.classList.toggle('is-active')
					 jsTestMedium.classList.toggle('is-active')
					 jsTestDown.classList.toggle('is-active')
						jsSizeImage.classList.toggle('is-active')
					jsButtonTest.classList.toggle('is-active')
						jsButtonDef.classList.toggle('is-active')
					jsSeparationButton.classList.toggle('is-active')
		    }
		})
