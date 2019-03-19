const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(`${process.cwd()}/siteConfig.js`)

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`
}

class Help extends React.Component {
  render() {
    const language = this.props.language || ''
    const supportLinks = [
      {
        content: `New with Tartiflette? You should [start the tutorial.](${docUrl(
          'tutorial/getting-started',
          language
        )})`,
        image: imgUrl('open-book.svg'),
        imageAlign: 'top',
        title: 'Start the tutorial',
      },
      {
        content: 'Join us on Slack to chat with the community and the Tartiflette team members.',
        image: imgUrl('slack.svg'),
        imageAlign: 'top',
        title: `[Come chat with us](${siteConfig.slackInviteWebsite})`,
      },
    ]

    const supportLinks2 = [
      {
        content: `Keep up to date with tartiflette's news by following us on twitter.`,
        image: imgUrl('twitter.svg'),
        imageAlign: 'top',
        title: `[Follow us on Twitter](${siteConfig.twitterUrl})`,
      },
      {
        content: `Our Engine is fully open-source, contributors are welcomed. We suggest you to take a look of the [contributing guidelines](${siteConfig.repoUrl}/blob/master/docs/CONTRIBUTING.md) and the [code of conduct](${siteConfig.repoUrl}/tree/master/docs)`,
        image: imgUrl('github.svg'),
        imageAlign: 'top',
        title: 'Contribute to Tartiflette?',
      },
    ]

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout="twoColumn" />
            <GridBlock contents={supportLinks2} layout="twoColumn" />
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = Help
