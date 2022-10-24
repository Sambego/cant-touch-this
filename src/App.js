import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Image,
  Columns,
  List,
  Text,
  Highlight,
  Video,
  Footer,
  Quote
} from "@sambego/diorama";

import Cant from "./video/cant.mp4";
import NPM from "./video/npm.mp4";
import cc from "./img/cc.svg";
import Sam from "./img/sam.png";

import Simple1 from "./img/simple-1.svg";
import Simple2 from "./img/simple-2.svg";
import Simple3 from "./img/simple-3.svg";

import Detail1 from "./img/detail-1.svg";
import Detail2 from "./img/detail-2.svg";
import Detail3 from "./img/detail-3.svg";
import Detail4 from "./img/detail-4.svg";
import Detail5 from "./img/detail-5.svg";
import Detail6 from "./img/detail-6.svg";
import Detail7 from "./img/detail-7.svg";
import Detail8 from "./img/detail-8.svg";
import Detail9 from "./img/detail-9.svg";

import { Annotation } from "./Annotation";

const white = "#fff";
const primaryColor = "#C594C5";
const primaryColorLight = "#e2c9e2";

function App() {
  return (
    <Deck
      footer={
        <Footer
          left={<Highlight color={primaryColor}>@sambego</Highlight>}
          right={<Highlight color={primaryColor}>ac.sambego.tech</Highlight>}
        />
      }
    >
      <Slide style={{ background: {primaryColor}, color: "#fff" }}>
        <Video
          src={Cant}
          loop
          autoplay
          full
          color={primaryColor}
          style={{ overflow: "hidden", zIndex: 1 }}
        />
        <Title style={{ 
          color: "#ffffff", 
          position: "relative", 
          zIndex: 1,
          textShadow: `-4px -4px 0 ${primaryColor},4px -4px 0 ${primaryColor},-4px 4px 0 ${primaryColor},4px 4px 0 ${primaryColor}`,
        }}>
          Can't touch this!
        </Title>
        <Image
          src={cc}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2,
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src={Sam} alt="A picture of me" full color={primaryColor} />
          </div>
          <div>
            <Subtitle>Sam Bellen</Subtitle>
            <List>
              <li>Developer Advocate Engineer</li>
              <li>Auth0</li>
              <li>GDE</li>
              <li>@sambego</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <video src={NPM} autoPlay style={{ height: "80vh" }}></video>
        <Text>
          <span style={{ fontFamily: "monospace" }}>npx @sambego/about-me</span>
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://ac.sambego.tech"
          >
            ac.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Summary</Subtitle>
        <List>
          <li>Attribute-Based Access Control</li>
          <li>Role-Based Access Control</li>
          <li>Relationship-Based Access Control</li>
        </List>
      </Slide>

      <Slide style={{ background: primaryColor }}>
        <Title
          style={{ letterSpacing: "3rem", position: "relative", zIndex: 1 }}
        >
          Authentication vs Authorization
        </Title>
      </Slide>
      
      <Slide>
        <Text>
          <Highlight color={primaryColor}>Authentication</Highlight> is the process of <Highlight color={primaryColor}>verifying someone</Highlight> is who they say they are.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}>Authorization</Highlight> is the art of regulating <Highlight color={primaryColor}>who can do what</Highlight> on your system.
        </Text>
      </Slide>

      
      <Slide style={{ background: primaryColor }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>R</span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color={primaryColor}>Role-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          A user has <Highlight color={primaryColor}>one or more roles</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          Roles
        </Subtitle>
        <List>
          <li>Admin</li>
          <li>Engineer</li>
          <li>Guest</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Text>
          A role has <Highlight color={primaryColor}>one or more permissions</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Subtitle>
          Permissions
        </Subtitle>
        <List>
          <li>Read a resource</li>
          <li>Write to a resource</li>
          <li>Delete a resource</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color={primaryColor}>guest</Highlight> is able to <Highlight color={primaryColor}>read</Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color={primaryColor}><Annotation note="role">guest</Annotation></Highlight> is able to <Highlight color={primaryColor}><Annotation note="permission">read</Annotation></Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color={primaryColor}>engineer</Highlight> is able to <Highlight color={primaryColor}>read</Highlight> and <Highlight color={primaryColor}>edit</Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color={primaryColor}><Annotation note="role">engineer</Annotation></Highlight> is able to <Highlight color={primaryColor}><Annotation note="permission" bottom>read</Annotation></Highlight> and <Highlight color={primaryColor}><Annotation note="permission">edit</Annotation></Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color={primaryColor}>admin</Highlight> is able to <Highlight color={primaryColor}>read</Highlight>, <Highlight color={primaryColor}>edit</Highlight> and <Highlight color={primaryColor}>delete</Highlight> all documentation.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color={primaryColor}><Annotation note="role">admin</Annotation></Highlight> is able to <Highlight color={primaryColor}><Annotation note="permission">read</Annotation></Highlight>, <Highlight color={primaryColor}><Annotation note="permission" bottom>edit</Annotation></Highlight> and <Highlight color={primaryColor}><Annotation note="permission">delete</Annotation></Highlight> all documentation.
        </Text>
      </Slide>


      <Slide style={{ background: primaryColor }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>A</span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color={primaryColor}>Attribute-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color={primaryColor}>Policy-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          Attributes
        </Subtitle>
        <List>
          <li>User</li>
          <li>Environment</li>
          <li>Resource</li>
          <li>Action</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          User
        </Subtitle>
        <List>
          <li>Role</li>
          <li>Organization</li>
          <li>Security clearance</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Environment
        </Subtitle>
        <List>
          <li>Time of day</li>
          <li>Location of data</li>
          <li>Current thread level</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Resource
        </Subtitle>
        <List>
          <li>Creation date</li>
          <li>Owner</li>
          <li>Data sensitivity</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide>
        <Subtitle>
          Action
        </Subtitle>
        <List>
          <li>Read</li>
          <li>Write</li>
          <li>Delete</li>
          <li>...</li>
        </List>
      </Slide>     
      <Slide>
        <Text>
          <Highlight color="#fff">Any engineer</Highlight> can <Highlight color="#fff">write</Highlight> to <Highlight color="#fff">any file</Highlight>, if we are currently <br/><Highlight color="#fff">not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}><Annotation note="user">Any engineer</Annotation></Highlight> can <Highlight color={primaryColorLight}>write</Highlight> to <Highlight color={primaryColorLight}>any file</Highlight>, if we are currently <br/><Highlight color={primaryColorLight}>not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>Any engineer</Highlight> can <Highlight color={primaryColor}><Annotation note="action">write</Annotation></Highlight> to <Highlight color={primaryColorLight}>any file</Highlight>, if we are currently <br/><Highlight color={primaryColorLight}>not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>Any engineer</Highlight> can <Highlight color={primaryColorLight}>write</Highlight> to <Highlight color={primaryColor}><Annotation note="resource">any file</Annotation></Highlight>, if we are currently <br/><Highlight color={primaryColorLight}>not experiencing a DDOS attack</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>Any engineer</Highlight> can <Highlight color={primaryColorLight}>write</Highlight> to <Highlight color={primaryColorLight}>any file</Highlight>, if we are currently <br/><Highlight color={primaryColor}><Annotation note="environment" bottom>not experiencing a DDOS attack</Annotation></Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          <Highlight color="#fff">An accountant</Highlight> can <Highlight color="#fff">upload</Highlight> <Highlight color="#fff">an invoice</Highlight>, if it is <br/><Highlight color="#fff">during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}><Annotation note="user">An accountant</Annotation></Highlight> can <Highlight color={primaryColorLight}>upload</Highlight> <Highlight color={primaryColorLight}>an invoice</Highlight>, if it is <br/><Highlight color={primaryColorLight}>during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>An accountant</Highlight> can <Highlight color={primaryColor}><Annotation note="action">upload</Annotation></Highlight> <Highlight color={primaryColorLight}>an invoice</Highlight>, if it is <br/><Highlight color={primaryColorLight}>during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>An accountant</Highlight> can <Highlight color={primaryColorLight}>upload</Highlight> <Highlight color={primaryColor}><Annotation note="resource">an invoice</Annotation></Highlight>, if it is <br/><Highlight color={primaryColorLight}>during their working hours</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>An accountant</Highlight> can <Highlight color={primaryColorLight}>upload</Highlight> <Highlight color={primaryColorLight}>an invoice</Highlight>, if it is <br/><Highlight color={primaryColor}><Annotation note="environment" bottom>during their working hours</Annotation></Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color="#fff">A HR representative</Highlight> can <Highlight color="#fff">look up</Highlight> <Highlight color="#fff">personal details</Highlight>, if the subject <br/><Highlight color="#fff">is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}><Annotation note="user">A HR representative</Annotation></Highlight> can <Highlight color={primaryColorLight}>look up</Highlight> <Highlight color={primaryColorLight}>personal details</Highlight>, if the subject <br/><Highlight color={primaryColorLight}>is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>A HR representative</Highlight> can <Highlight color={primaryColor}><Annotation note="action">look up</Annotation></Highlight> <Highlight color={primaryColorLight}>personal details</Highlight>, if the subject <br/><Highlight color={primaryColorLight}>is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>A HR representative</Highlight> can <Highlight color={primaryColorLight}>look up</Highlight> <Highlight color={primaryColor}><Annotation note="resource">personal details</Annotation></Highlight>, if the subject <br/><Highlight color={primaryColorLight}>is part of their local branch</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>A HR representative</Highlight> can <Highlight color={primaryColorLight}>look up</Highlight> <Highlight color={primaryColorLight}>personal details</Highlight>, if the subject <br/><Highlight color={primaryColor}><Annotation note="environment" bottom>is part of their local branch</Annotation></Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        ABAC allows for a <Highlight color={primaryColor}>fine grained controll</Highlight> over <Highlight color={primaryColor}>all possible actions</Highlight> on your infrastructure.
        </Text>
      </Slide>
      <Slide>
        <Text>
        You have to build out <Highlight color={primaryColor}>all policies</Highlight> to cover <Highlight color={primaryColor}>all cases</Highlight>.
        </Text>
      </Slide>
    
      <Slide style={{ background: primaryColor }}>
        <Title
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          <span style={{borderBottom: '.8vw solid #000'}}>R<span style={{textTransform: "lowercase"}}>e</span></span>BAC
        </Title>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight color={primaryColor}>Relationship-Based</Highlight> Accss Control
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}>Permissions</Highlight> for a resource are defined by the user's <Highlight color={primaryColor}>relationship to that resource</Highlight>.
        </Text>
      </Slide>
      
      
      <Slide>
        <Text>
        <Highlight color={primaryColor}>Users</Highlight> are connected to <Highlight color={primaryColor}>objects</Highlight> through <Highlight color={primaryColor}>relationships</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color={primaryColor}>user</Highlight> can be any sort of <Highlight color={primaryColor}>group, folder, organisation, appliation user</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          An <Highlight color={primaryColor}>object</Highlight> is <Highlight color={primaryColor}>any resource</Highlight> your application or api deals with.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color={primaryColor}>relationship</Highlight> is <Highlight color={primaryColor}>how a particular user is connected to a specific object</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={white}>Sam</Highlight> is <Highlight color={white}>the owner</Highlight> of <Highlight color={white}>this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}><Annotation note="user">Sam</Annotation></Highlight> is <Highlight color={primaryColorLight}>the owner</Highlight> of <Highlight color={primaryColorLight}>this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>Sam</Highlight> is <Highlight color={primaryColor}><Annotation note="relation">the owner</Annotation></Highlight> of <Highlight color={primaryColorLight}>this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColorLight}>Sam</Highlight> is <Highlight color={primaryColorLight}>the owner</Highlight> of <Highlight color={primaryColor}><Annotation note="object">this slidedeck</Annotation></Highlight>.
        </Text>
      </Slide>      
      
      <Slide>
        <Text>
          A resource can be <Highlight color={primaryColor}>a user in one relationship</Highlight> and  <Highlight color={primaryColor}>an object in another</Highlight>.
        </Text>
      </Slide>

      <Slide>
        <Text>
          There are <Highlight color={primaryColor}>direct</Highlight> and <Highlight color={primaryColor}>indirect relationships</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight color={primaryColor}>user</Highlight> can have a <Highlight color={primaryColor}>direct relationship</Highlight> to a resource.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is an <Highlight color="#fff">editor</Highlight> of <Highlight color="#fff">this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}><Annotation note="user">Sam</Annotation></Highlight> is an <Highlight color={primaryColorLight}>editor</Highlight> of <Highlight color={primaryColorLight}>this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is an <Highlight color={primaryColor}><Annotation note="relation">editor</Annotation></Highlight> of <Highlight color={primaryColorLight}>this slidedeck</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is an <Highlight color={primaryColorLight}>editor</Highlight> of <Highlight color={primaryColor}><Annotation note="object">this slidedeck</Annotation></Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          A user can be <Highlight color={primaryColor}>indirectly</Highlight> related to a resource <Highlight color={primaryColor}>through a group they are related to</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is a <Highlight color="#fff">member</Highlight> of <Highlight color="#fff">Auth0</Highlight>, and can therefor <Highlight color="#fff">view</Highlight> all <Highlight color="#fff">slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}><Annotation note="user">Sam</Annotation></Highlight> is a <Highlight color={primaryColorLight}>member</Highlight> of <Highlight color={primaryColorLight}>Auth0</Highlight>, and can therefor <Highlight color={primaryColorLight}>view</Highlight> all <br/><Highlight color={primaryColorLight}>slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is a <Highlight color={primaryColor}><Annotation note="relation">member</Annotation></Highlight> of <Highlight color={primaryColorLight}>Auth0</Highlight>, and can therefor <Highlight color={primaryColorLight}>view</Highlight> all <br/><Highlight color={primaryColorLight}>slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is a <Highlight color={primaryColorLight}>member</Highlight> of <Highlight color={primaryColor}><Annotation note="object">Auth0</Annotation></Highlight>, and can therefor <Highlight color={primaryColorLight}>view</Highlight> all <br/><Highlight color={primaryColorLight}>slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is a <Highlight color={primaryColorLight}>member</Highlight> of <Highlight color={primaryColor}><Annotation note="user">Auth0</Annotation></Highlight>, and can therefor <Highlight color={primaryColorLight}>view</Highlight> all <br/><Highlight color={primaryColorLight}>slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is a <Highlight color={primaryColorLight}>member</Highlight> of <Highlight color={primaryColorLight}>Auth0</Highlight>, and can therefor <Highlight color={primaryColor}><Annotation note="relation">view</Annotation></Highlight> all <br/><Highlight color={primaryColorLight}>slide decks in our organisation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is a <Highlight color={primaryColorLight}>member</Highlight> of <Highlight color={primaryColorLight}>Auth0</Highlight>, and can therefor <Highlight color={primaryColorLight}>view</Highlight> all <br/><Highlight color={primaryColor}><Annotation note="object" bottom>slide decks in our organisation</Annotation></Highlight>.
        </Text>
      </Slide>
      
      <Slide>
        <Text>
          A user can be <Highlight color={primaryColor}>indirectly</Highlight> related to a resource through <Highlight color={primaryColor}>a parent they are related to</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color="#fff">Sam</Highlight> is the <Highlight color="#fff">owner</Highlight> of <Highlight color="#fff">a folder</Highlight> on a drive, and therefor also <Highlight color="#fff">owns</Highlight> all <Highlight color="#fff">slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}><Annotation note="user">Sam</Annotation></Highlight> is the <Highlight color={primaryColorLight}>owner</Highlight> of <Highlight color={primaryColorLight}>a folder</Highlight> on a drive, and therefor also <Highlight color={primaryColorLight}>owns</Highlight> all <Highlight color={primaryColorLight}>slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is the <Highlight color={primaryColor}><Annotation note="relation">owner</Annotation></Highlight> of <Highlight color={primaryColorLight}>a folder</Highlight> on a drive, and therefor also <Highlight color={primaryColorLight}>owns</Highlight> all <Highlight color={primaryColorLight}>slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is the <Highlight color={primaryColorLight}>owner</Highlight> of <Highlight color={primaryColor}><Annotation note="object">a folder</Annotation></Highlight> on a drive, and therefor also <Highlight color={primaryColorLight}>owns</Highlight> all <Highlight color={primaryColorLight}>slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is the <Highlight color={primaryColorLight}>owner</Highlight> of <Highlight color={primaryColor}><Annotation note="user">a folder</Annotation></Highlight> on a drive, and therefor also <Highlight color={primaryColorLight}>owns</Highlight> all <Highlight color={primaryColorLight}>slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is the <Highlight color={primaryColorLight}>owner</Highlight> of <Highlight color={primaryColorLight}>a folder</Highlight> on a drive, and therefor also <Highlight color={primaryColor}><Annotation note="relation">owns</Annotation></Highlight> all <Highlight color={primaryColorLight}>slide decks in that folder</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColorLight}>Sam</Highlight> is the <Highlight color={primaryColorLight}>owner</Highlight> of <Highlight color={primaryColorLight}>a folder</Highlight> on a drive, and therefor also <Highlight color={primaryColorLight}>owns</Highlight> all <Highlight color={primaryColor}><Annotation note="objects" bottom>slide decks in that folder</Annotation></Highlight>.
        </Text>
      </Slide>

      {/* <Slide>
        <Image src={Simple1} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Simple2} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Simple3} alt="A simple example of ReBAC" />
      </Slide>
      
      
      <Slide>
        <Image src={Detail2} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail3} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail4} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail5} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Let's add some <Highlight color={primaryColor}>users</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={Detail7} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail8} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Image src={Detail6} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Lets do an <Highlight color={primaryColor}>exercise</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Image src={Detail9} alt="A simple example of ReBAC" />
      </Slide>
      <Slide>
        <Text>
          Will <Highlight color={primaryColor}>Ben</Highlight> be able to <Highlight color={primaryColor}>view the "can't touch this"</Highlight> slidedeck?
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight color={primaryColor}>No!</Highlight>
        </Text>
      </Slide> */}
     
      <Slide>
        <Subtitle>
          3, 2, 1 <Highlight color={primaryColor}>Action</Highlight>!
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://play.fga.dev"
            target="_BLANK"
            rel="noreferrer"
          >
            play.fga.dev
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Text>
          So what's the <Highlight color={primaryColor}>difference between RBAC and ReBAC</Highlight>?
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>RBAC defined permissions and roles</Highlight> are typically valid for <Highlight color={primaryColor}>all resources of a certain resource type</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          eg. An <Highlight color={primaryColor}>admin</Highlight> can <Highlight color={primaryColor}>delete all posts</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>ReBAC</Highlight> defines relationships per <Highlight color={primaryColor}>specific resource</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          eg. An <Highlight color={primaryColor}>admin</Highlight> can only delete <Highlight color={primaryColor}>posts assigned to them</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>ReBAC</Highlight> is a more <Highlight color={primaryColor}>fine grained</Highlight> aproach to authorization.
        </Text>
      </Slide>

      <Slide>
        <Subtitle>
        Let's <Highlight color={primaryColor}>recap</Highlight>.
        </Subtitle>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>RBAC</Highlight> uses <Highlight color={primaryColor}>permissions</Highlight> and <Highlight color={primaryColor}>roles</Highlight> to grant privileges.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>ABAC</Highlight> checks <Highlight color={primaryColor}>a combination of different attributes</Highlight> to grant privileges.
        </Text>
      </Slide>
      <Slide>
        <Text>
        <Highlight color={primaryColor}>ReBAC</Highlight> looks at <Highlight color={primaryColor}>relationships</Highlight> between <Highlight color={primaryColor}>users</Highlight> and <Highlight color={primaryColor}>objects</Highlight> to grant privileges.
        </Text>
      </Slide>
      
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://fga.dev"
          >
            fga.dev
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://play.fga.dev"
          >
            play.fga.dev
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://openfga.dev"
          >
            openfga.dev
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://zanzibar.academy"
          >
            zanzibar.academy
          </a>
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderBottom: `.9vw solid ${primaryColor}` }}
            href="https://ac.sambego.tech"
          >
            ac.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide style={{ background: primaryColor }}>
        <Subtitle
          style={{ letterSpacing: "4rem", position: "relative", zIndex: 1 }}
        >
          Thanks
        </Subtitle>
      </Slide>
    </Deck>
  );
}

export default App;
