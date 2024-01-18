import { Header, Content, Title, Row, Column, TextBlock } from './common'

import CardStarted from "./components/CardStarted"
import CardInner from "./components/CardInner"

const ProfilePage = () => {
  const data = getProfileInfo()

  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>

        <Content name='about'>
          <Title text='About Me' />
          <Row>
            <Column className='col-d-6 border-line-v'>
              <TextBlock text={data.description} />
            </Column>
          </Row>
        </Content>

      </CardInner>
    </>
  )
}

const getProfileInfo = () => {
  const description = `I am Andrii Pavliuk, full-stack software engineer from Ukraine, Kyiv.
  I make the web a more interactive and exciting place by creating applications
  for the modern 🌍 world. I love working with the latest technologies
  to build modular and testable projects.`

  // Pass the data as props
  return { description }
}

export default ProfilePage