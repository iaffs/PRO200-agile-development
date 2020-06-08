import React from 'react'

function PaymentList(props) {

	const getText = () => {
		switch (props.option.type) {
			case 'card':
				return <p className="text-sm text-gray-900">Kort **** 1234 <span className="text-gray-700 text-xs">- Utløper 06/22</span></p>
			case 'vipps':
				return <p className="text-sm text-gray-900">Vipps</p>
			case 'newCard':
				return <p className="text-sm text-gray-900">Nytt kort</p>
			default:
				return 'error';
		}
	}

	const renderSvg = () => {
		switch (props.option.type) {
			case 'card':
				return	<svg width="55" height="18" viewBox="0 0 55 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0)">
										<path d="M23.8348 17.565H19.3629L22.1752 0.322754H26.6471L23.8348 17.565Z" fill="#1A1F71"/>
										<path d="M15.5826 0.322958L11.2951 12.1712L10.7879 9.63561L9.26655 1.84433C9.26655 1.84433 9.08215 0.276855 7.14585 0.276855H0.0922045L0 0.599571C0 0.599571 2.16681 1.06059 4.70243 2.58197L8.62112 17.5652H13.2775L20.4233 0.322958H15.5826Z" fill="#1A1F71"/>
										<path d="M50.8509 17.565H54.9539L51.358 0.322754H47.762C46.1023 0.322754 45.6874 1.61362 45.6874 1.61362L39.0026 17.565H43.705L44.627 15.0294H50.3437L50.8509 17.565ZM45.9179 11.4334L48.2691 4.97908L49.6061 11.4334H45.9179Z" fill="#1A1F71"/>
										<path d="M39.3713 4.47172L40.0168 0.783535C40.0168 0.783535 38.0344 0.0458984 36.0059 0.0458984C33.7929 0.0458984 28.4912 1.01405 28.4912 5.76258C28.4912 10.2345 34.715 10.2806 34.715 12.6318C34.715 14.983 29.1366 14.5681 27.2925 13.0928L26.6471 16.9654C26.6471 16.9654 28.6756 17.9336 31.7183 17.9336C34.7611 17.9336 39.4174 16.3661 39.4174 12.0325C39.4174 7.56057 33.1475 7.14565 33.1475 5.20935C33.1014 3.13475 37.4811 3.41136 39.3713 4.47172Z" fill="#1A1F71"/>
										<path d="M10.7879 9.63561L9.26655 1.84433C9.26655 1.84433 9.08214 0.276855 7.14585 0.276855H0.0922045L0 0.599571C0 0.599571 3.41157 1.2911 6.68483 3.96504C9.77368 6.45456 10.7879 9.63561 10.7879 9.63561Z" fill="#F7B600"/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="55" height="17.8416" fill="white"/>
										</clipPath>
									</defs>
								</svg>
			case 'vipps':
				return 	<svg width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.09786 0.647461L7.02997 9.21327L9.90458 0.647461H13.2966L8.23731 13.3525H5.70764L0.648315 0.647461H4.09786Z" fill="#FF5B24"/>
									<path d="M20.9431 11.3402C23.0703 11.3402 24.2777 10.3054 25.4275 8.8107C26.0599 8.00586 26.8648 7.83339 27.4398 8.2933C28.0147 8.75321 28.0722 9.61554 27.4398 10.4204C25.7725 12.6049 23.6453 13.9272 20.9431 13.9272C18.011 13.9272 15.4239 12.3175 13.6416 9.50056C13.1242 8.75321 13.2391 7.94837 13.8141 7.54595C14.389 7.14353 15.2514 7.31599 15.7688 8.12083C17.0336 10.018 18.7584 11.3402 20.9431 11.3402ZM24.9101 4.26909C24.9101 5.30389 24.1052 5.99375 23.1853 5.99375C22.2654 5.99375 21.4606 5.30389 21.4606 4.26909C21.4606 3.2343 22.2654 2.54443 23.1853 2.54443C24.1052 2.54443 24.9101 3.29179 24.9101 4.26909Z" fill="#FF5B24"/>
									<path d="M33.0164 0.647667V2.37233C33.8788 1.16506 35.2012 0.302734 37.1559 0.302734C39.6281 0.302734 42.5027 2.37233 42.5027 6.79895C42.5027 11.4555 39.7431 13.6976 36.8684 13.6976C35.3736 13.6976 33.9938 13.1227 32.959 11.6855V17.7793H29.8544V0.647667H33.0164ZM33.0164 6.97142C33.0164 9.55841 34.5113 10.9381 36.1785 10.9381C37.7883 10.9381 39.3981 9.67339 39.3981 6.97142C39.3981 4.32694 37.7883 3.06219 36.1785 3.06219C34.5687 3.06219 33.0164 4.26945 33.0164 6.97142Z" fill="#FF5B24"/>
									<path d="M47.9646 0.647667V2.37233C48.827 1.16506 50.1493 0.302734 52.104 0.302734C54.5762 0.302734 57.4508 2.37233 57.4508 6.79895C57.4508 11.4555 54.6912 13.6976 51.8166 13.6976C50.3218 13.6976 48.9419 13.1227 47.9071 11.6855V17.7793H44.8025V0.647667H47.9646ZM47.9646 6.97142C47.9646 9.55841 49.4594 10.9381 51.1266 10.9381C52.7364 10.9381 54.3462 9.67339 54.3462 6.97142C54.3462 4.32694 52.7364 3.06219 51.1266 3.06219C49.4594 3.06219 47.9646 4.26945 47.9646 6.97142Z" fill="#FF5B24"/>
									<path d="M64.0624 0.302734C66.6495 0.302734 68.4893 1.51 69.2942 4.49941L66.4771 4.95932C66.4196 3.46461 65.4997 2.94721 64.1199 2.94721C63.085 2.94721 62.2801 3.40712 62.2801 4.15448C62.2801 4.72936 62.6826 5.30425 63.8899 5.5342L66.0171 5.93662C68.0868 6.33904 69.2367 7.71877 69.2367 9.55841C69.2367 12.3179 66.7645 13.6976 64.4073 13.6976C61.9351 13.6976 59.1755 12.4328 58.7731 9.32845L61.5902 8.86854C61.7627 10.4782 62.74 11.0531 64.3498 11.0531C65.5572 11.0531 66.3621 10.5932 66.3621 9.84585C66.3621 9.15599 65.9596 8.63859 64.6373 8.40864L62.6826 8.0637C60.6128 7.66128 59.348 6.22407 59.348 4.38443C59.4055 1.51 61.9926 0.302734 64.0624 0.302734Z" fill="#FF5B24"/>
								</svg>
			default:
				return null;
		}
	};

		return (
			<div onClick={() => props.isSelected(props.option)} className={props.option.selected ? "border border-vy-green-300 bg-vy-green-100 rounded-md mt-2" : "border border-gray-300 bg-white rounded-md mt-2"}>
				<div className="flex items-center justify-between py-3 px-3">
					<div className="flex items-center">
						<div className="mr-2 flex items-center">
							<button onClick={() => props.isSelected(props.option)} className="border border-gray-300 h-5 w-5 bg-transparent rounded-full">
								{
									props.option.selected 
										? <svg className="h-full w-full text-green-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
											</svg>
										: ""}
							</button>
						</div>
						{getText()}
					</div>
					<div>
						{renderSvg()}
					</div>
				</div>
			</div>
		);
	}

export default PaymentList;
