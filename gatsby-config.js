module.exports = {
	siteMetadata: {
		title: 'Adityo Pratomo',
		description: 'Software Craftsman'
	},
	plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		}
	] 
}
