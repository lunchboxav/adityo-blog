module.exports = {
	siteMetadata: {
		title: 'My Blog',
		description: 'Home of Adityo'
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
