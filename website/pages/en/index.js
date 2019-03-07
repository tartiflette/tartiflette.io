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

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self',
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
)

const ProjectTitle = props => (
  <h2 className="projectTitle">
    <img src={props.img_src} alt="Tartiflette" />
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || ''
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle img_src={imgUrl('tartiflette.svg')} />
          <PromoSection>
            <Button href={docUrl('tutorial/getting-started', language)}>Tutorial</Button>
            <Button href={docUrl('api/engine', language)}>API</Button>
            <Button href={siteConfig.repoUrl}>Github</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
)

const Features = () => (
  <Block background="light" layout="threeColumn">
    {[
      {
        content: `Build your GraphQL API with ease by defining your **Schema** separately from the implementation, by using the **SDL** _(Schema Definition Language)_.`,
        image: imgUrl('sdl.png'),
        imageAlign: 'top',
        title: 'Schema First (SDL)',
      },
      {
        content: `We decided to build our engine on top of **asyncio** and enjoy all the benefits of it.`,
        image: imgUrl('asyncio.png'),
        imageAlign: 'top',
        title: 'Built on top of asyncio',
      },
      {
        content: `In addition to the Tartiflette engine, we provide a \`tartiflette-aiohttp\` distribution, which allowS you to expose your GraphQL API through HTTP.`,
        image: imgUrl('aiohttp-icon-128x128.png'),
        imageAlign: 'top',
        title: 'Tartiflette aiohttp',
      },
    ]}
  </Block>
)

const Community = () => (
  <Block background="light" layout="threeColumn">
    {[
      {
        content: `Keep up to date with tartiflette's news by following us on twitter.`,
        image: imgUrl('twitter.svg'),
        imageAlign: 'top',
        title: `[Follow us on Twitter](${siteConfig.twitterUrl})`,
      },
      {
        content: 'Join us on Slack to chat with the community and the Tartiflette team members.',
        image: imgUrl('slack.svg'),
        imageAlign: 'top',
        title: `[Come chat with us](${siteConfig.slackInviteWebsite})`,
      },
      {
        content: 'Curious about the news of Tartiflette? Everything will be published on Medium, join us.',
        image: imgUrl('medium.svg'),
        imageAlign: 'top',
        title: `[Read us on Medium](${siteConfig.mediumUrl})`,
      },
    ]}
  </Block>
)

const DevExperience = props => (
  <Block id="try">
    {[
      {
        content: `We focused our energy on providing a simple and powerful developer experience, giving you the ability to extend your engine and develop quickly your GraphQL API. [Try it !](${docUrl('tutorial/getting-started', props.language)})`,
        image: imgUrl('devexp.png'),
        imageAlign: 'left',
        title: 'Dev experience matters',
      },
    ]}
  </Block>
)

class Index extends React.Component {
  render() {
    const language = this.props.language || ''

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <DevExperience language={language} />
          <Community />
        </div>
      </div>
    )
  }
}

module.exports = Index
