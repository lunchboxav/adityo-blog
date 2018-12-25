module.exports = {
	siteMetadata: {
		title: 'My Blog',
		description: 'Home of Adityo'
	},
	plugins: [
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		}
	] 
}
