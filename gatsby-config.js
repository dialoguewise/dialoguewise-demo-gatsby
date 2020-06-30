module.exports = {
  plugins: [    
    {
      resolve: `gatsby-source-dialoguewise`,
      options: {
        apiKey: 'b1266377591c4f2a9494c3abdd2cac5381D6Z825D26CEBAE8B6rn',
        emailHash: '/kgmM46s1xC56BOFWRZp4j+0bdU19URpXdNT9liAX50=',
        dialogues: [
            {
                slug: 'hero-section',
                isPilot: false,
                variableList: {
                    '@wheel': 2
                },
            },
        ],
      },
    },
  ],
}