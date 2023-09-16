export const getLastPageFromLinks = (links) => {
	const lastPageLink = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

	return lastPageLink ? Number(lastPageLink[1]) : 1;
};
